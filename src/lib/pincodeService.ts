/**
 * India Postal Pincode API Service
 *
 * Uses the free public API from api.postalpincode.in
 * No API key required. Rate limit: 1000 requests/hour per IP
 *
 * Documentation: https://www.postalpincode.in/Api-Details
 */

export interface PostOffice {
    Name: string;
    Description: string | null;
    BranchType: string;
    DeliveryStatus: string;
    Circle: string;
    District: string;
    Division: string;
    Region: string;
    Block: string;
    State: string;
    Country: string;
    Pincode: string;
}

export interface PincodeResponse {
    Message: string;
    Status: string;
    PostOffice: PostOffice[] | null;
}

/**
 * Fetch location details by pincode
 * @param pincode - 6 digit Indian pincode
 * @returns Array of post offices/localities for that pincode
 */
export async function getLocationsByPincode(pincode: string): Promise<PostOffice[]> {
    if (!pincode || pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
        throw new Error("Invalid pincode. Must be a 6-digit number.");
    }

    try {
        const response = await fetch(
            `https://api.postalpincode.in/pincode/${pincode}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data: PincodeResponse[] = await response.json();

        if (data[0]?.Status === "Success" && data[0]?.PostOffice) {
            return data[0].PostOffice;
        }

        return [];
    } catch (error) {
        console.error("Error fetching pincode data:", error);
        return [];
    }
}

/**
 * Fetch post offices by city/post office name
 * @param postOfficeName - Name of the post office or city
 * @returns Array of matching post offices
 */
export async function getLocationsByName(postOfficeName: string): Promise<PostOffice[]> {
    if (!postOfficeName || postOfficeName.length < 3) {
        throw new Error("Post office name must be at least 3 characters.");
    }

    try {
        const response = await fetch(
            `https://api.postalpincode.in/postoffice/${encodeURIComponent(postOfficeName)}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data: PincodeResponse[] = await response.json();

        if (data[0]?.Status === "Success" && data[0]?.PostOffice) {
            return data[0].PostOffice;
        }

        return [];
    } catch (error) {
        console.error("Error fetching location data:", error);
        return [];
    }
}

/**
 * Get all localities/areas for Lucknow
 * This fetches from multiple Lucknow pincodes to build a comprehensive list
 */
export async function getLucknowLocalities(): Promise<string[]> {
    // Major Lucknow pincodes covering different areas
    const lucknowPincodes = [
        "226001", // Hazratganj, Aminabad
        "226010", // Gomti Nagar
        "226016", // Indira Nagar
        "226020", // Aliganj
        "226022", // Jankipuram
        "226024", // Mahanagar
        "226004", // Alambagh
        "226003", // Charbagh
        "226006", // Civil Lines
        "226012", // Vikas Nagar
        "226021", // Rajajipuram
        "226002", // Chowk
        "226018", // Chinhat
        "226025", // Cantt
    ];

    const allLocalities = new Set<string>();

    try {
        const promises = lucknowPincodes.map((pincode) =>
            getLocationsByPincode(pincode)
        );

        const results = await Promise.allSettled(promises);

        results.forEach((result) => {
            if (result.status === "fulfilled" && result.value) {
                result.value.forEach((office) => {
                    if (office.Name) {
                        allLocalities.add(office.Name);
                    }
                });
            }
        });

        return Array.from(allLocalities).sort();
    } catch (error) {
        console.error("Error fetching Lucknow localities:", error);
        return [];
    }
}

/**
 * Auto-fill city and state from pincode
 * Useful for form auto-completion
 */
export async function getAddressFromPincode(pincode: string): Promise<{
    city: string;
    district: string;
    state: string;
    localities: string[];
} | null> {
    const postOffices = await getLocationsByPincode(pincode);

    if (postOffices.length === 0) {
        return null;
    }

    const firstOffice = postOffices[0];

    return {
        city: firstOffice.Division || firstOffice.District,
        district: firstOffice.District,
        state: firstOffice.State,
        localities: postOffices.map((po) => po.Name),
    };
}

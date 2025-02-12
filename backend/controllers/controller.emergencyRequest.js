import EmergencyRequest from "../models/emergencyRequest.js";

// Create a new emergency request
export const createEmergencyRequest = async (req, res) => {
    const {title,description,location,priority,contact} = req.body;
    try {
        if (!title ||!description ||!location ||!priority ||!contact) {
            return res.status(400).json({ message: "All fields are required." });
        }
        const emergencyRequest = await EmergencyRequest.create({
            title,
            description,
            location,
            priority,
            contact
        });

        return res.status(201).json({
            message: "Emergency request created successfully.",
            emergencyRequest
        });

    } catch (error) {
        res.status(500).json({ message: "Emergency request creation Failed" });
        console.error(`Error While Creating Emergency Request: ${error.message}`);
    }
};

// Get all emergency requests
export const getEmergencyRequests = async (req, res) => {
    try {
        const emergencyRequests = await EmergencyRequest.find();
        return res.status(200).json({ emergencyRequests });
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Emergency Requests" });
        console.error(`Error While Fetching Emergency Requests: ${error.message}`);
    }
};

// Get emergency request by ID
export const getEmergencyRequestById = async (req, res) => {
    const { id } = req.params;
    try {
        const emergencyRequest = await EmergencyRequest.findById(id);
        if (!emergencyRequest) {
            return res.status(404).json({ message: "Emergency Request Not Found" });
        }
        return res.status(200).json({ emergencyRequest });
        
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Emergency Request" });
        console.error(`Error While Fetching Emergency Request: ${error.message}`);
    }
}

// Update emergency request
export const updateEmergencyRequest = async (req, res) => {
    const { id } = req.params;
    const {title,description,location,priority,contact} = req.body;
    try {
       
        if (!title ||!description ||!location ||!priority ||!contact) {
            return res.status(400).json({ message: "All fields are required." });
        }
    
        const emergencyRequest = await EmergencyRequest.findByIdAndUpdate(id, {
            title,
            description,
            location,
            priority,
            contact
        }, { new: true });

        return res.status(200).json({
            message: "Emergency request updated successfully.",
            emergencyRequest
        });

    } catch (error) {
        res.status(500).json({ message: "Emergency request update Failed" });
        console.error(`Error While Updating Emergency Request: ${error.message}`);
    }
};

// Delete emergency request by ID
export const deleteEmergencyRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const emergencyRequest = await EmergencyRequest.findByIdAndDelete(id);
        if (!emergencyRequest) {
            return res.status(404).json({ message: "Emergency Request Not Found" });
        }
        return res.status(200).json({ message: "Emergency Request Deleted Successfully" });

    } catch (error) {
        res.status(500).json({ message: "Emergency request deletion Failed" });
        console.error(`Error While Deleting Emergency Request: ${error.message}`);
    }
};
export type cultureType = {
    key: string;
    value: string;
    description?:string;
}

export type cultureDataType = {
    country:string;
    code:string;
    culture:Array<cultureType>;
}

export const cultureData:Array<cultureDataType> =[
    {
        country:"Bangladesh",
        code:"BD",
        culture:[
            { key: "Centralized decision-making", value: "High", description:"Centralized decision-making is the description" },
            { key: "Managers’ influence", value: "High" },
            { key: "Deference", value: "High" },
            { key: "Establish trust", value: "High",description:"Establish trust is the description" },
            { key: "Solving conflicts by favoritism", value: "Moderate" },
            { key: "Avoiding conflicts", value: "Moderate" },
            { key: "Hierarchical structure", value: "Moderate" },
            { key: "Punctuality", value: "Low" },
            { key: "Building relationships", value: "High" },
            { key: "Safeguard workmates’ jobs", value: "Low" },
            { key: "Communication context", value: "High" },
            { key: "Coordination and collaboration/Team work", value: "Moderate" },
            { key: "Gender preference", value: "High" },
           
          ]
    },
        {
        country:"Kazakasthan",
        code:"KZ",
        culture:[
            { key: "Centralized decision-making", value: "High" },
            { key: "Managers’ influence", value: "High" },
            { key: "Deference", value: "High" },
            { key: "Establish trust", value: "High" },
            { key: "Solving conflicts by favoritism", value: "Moderate" },
            { key: "Avoiding conflicts", value: "Moderate" },
            { key: "Hierarchical structure", value: "Moderate" },
            { key: "Punctuality", value: "Low" },
            { key: "Building relationships", value: "High" },
            { key: "Safeguard workmates’ jobs", value: "Low" },
            { key: "Communication context", value: "High" },
            { key: "Coordination and collaboration/Team work", value: "Moderate" },
            { key: "Gender preference", value: "High" },
           
          ]
    },
    {
        country:"Peru",
        code:"PE",
        culture:[
            { key: "Centralized decision-making", value: "High" },
            { key: "Managers’ influence", value: "High" },
            { key: "Deference", value: "High" },
            { key: "Establish trust", value: "High" },
            { key: "Solving conflicts by favoritism", value: "Moderate" },
            { key: "Avoiding conflicts", value: "Moderate" },
            { key: "Hierarchical structure", value: "Moderate" },
            { key: "Punctuality", value: "Low" },
            { key: "Building relationships", value: "High" },
            { key: "Safeguard workmates’ jobs", value: "Low" },
            { key: "Communication context", value: "High" },
            { key: "Coordination and collaboration/Team work", value: "Moderate" },
            { key: "Gender preference", value: "High" },
           
          ]
    },
    {
        country:"USA",
        code:"US",
        culture:[
            { key: "Subordinate avoid taking risks", value: "Moderate" },
            { key: "Clients’ resistance", value: "High" },
            { key: "Belief in expertise", value: "Low" },
            { key: "Aiming for quick results", value: "N/A" },
            { key: "Relying on previous projects", value: "Low" },
            { key: "Dress code", value: "N/A" }
        ]
    },
    {
        country:"India",
        code:"IN",
        culture:[
            { key: "Subordinate avoid taking risks", value: "Moderate" },
            { key: "Clients’ resistance", value: "High" },
            { key: "Belief in expertise", value: "Low" },
            { key: "Aiming for quick results", value: "N/A" },
            { key: "Relying on previous projects", value: "Low" },
            { key: "Dress code", value: "N/A" }
        ]
    },
    {
        country:"China",
        code:"CN",
        culture:[
            { key: "Subordinate avoid taking risks", value: "Moderate" },
            { key: "Clients’ resistance", value: "High" },
            { key: "Belief in expertise", value: "Low" },
            { key: "Aiming for quick results", value: "N/A" },
            { key: "Relying on previous projects", value: "Low" },
            { key: "Dress code", value: "N/A" }
        ]
    },
    {
        country:"Japan",
        code:"JP",
        culture:[
            { key: "Subordinate avoid taking risks", value: "Moderate" },
            { key: "Clients’ resistance", value: "High" },
            { key: "Belief in expertise", value: "Low" },
            { key: "Aiming for quick results", value: "N/A" },
            { key: "Relying on previous projects", value: "Low" },
            { key: "Dress code", value: "N/A" }
        ]   
    },
    {
        country:"Russia",
        code:"RU",
        culture:[
            { key: "Subordinate avoid taking risks", value: "Moderate" },
            { key: "Clients’ resistance", value: "High" },
            { key: "Belief in expertise", value: "Low" },
            { key: "Aiming for quick results", value: "N/A" },
            { key: "Relying on previous projects", value: "Low" },
            { key: "Dress code", value: "N/A" }
        ]
    },
    {
        country:"Brazil",
        code:"BR",
        culture:[
            { key: "Subordinate avoid taking risks", value: "Moderate" },
            { key: "Clients’ resistance", value: "High" },
            { key: "Belief in expertise", value: "Low" },
            { key: "Aiming for quick results", value: "N/A" },
            { key: "Relying on previous projects", value: "Low" },
            { key: "Dress code", value: "N/A" }
        ]
    },
    {
        country:"Australia",
        code:"AU",
        culture:[
            { key: "Openness and Honesty", value: "High", description:"Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
            { key: "Gender preference", value: "High", description:"Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values."},
            { key: "Aiming for quick results", value: "Moderate", description:"Dummy"},
            { key: "Face saving", value: "Moderate" , description:"Dummy"},
            { key: "Take responsibility", value: "Low" , description:"Dummy"},
            { key: "Hidden agenda", value: "Low" , description:"Dummy"},
            { key: "Solution-focused requirements", value: "Low" , description:"Dummy"},
            { key: "Collaborative decision-making", value: "N/A" , description:"Dummy"},
            { key: "Managers’ influence", value: "N/A" , description:"Dummy"},
            { key: "Establish trust", value: "N/A" , description:"Dummy"},
            { key: "Solving conflicts by compromising", value: "N/A" , description:"Dummy"},
            { key: "Recognition of uncertainty", value: "N/A" , description:"Dummy"},
            { key: "Clients’ resistance", value: "N/A" , description:"Dummy"}
        ]
    }
]
  

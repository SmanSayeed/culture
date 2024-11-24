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
            { key: "Openness and Honesty", value: "High" },
            { key: "Gender preference", value: "High" },
            { key: "Aiming for quick results", value: "Moderate" },
            { key: "Face saving", value: "Moderate" },
            { key: "Take responsibility", value: "Low" },
            { key: "Hidden agenda", value: "Low" },
            { key: "Solution-focused requirements", value: "Low" },
            { key: "Collaborative decision-making", value: "N/A" },
            { key: "Managers’ influence", value: "N/A" },
            { key: "Establish trust", value: "N/A" },
            { key: "Solving conflicts by compromising", value: "N/A" },
            { key: "Recognition of uncertainty", value: "N/A" },
            { key: "Clients’ resistance", value: "N/A" }
        ]
    }
]
  

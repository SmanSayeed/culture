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
        country:"Albania",
        code:"ALB",
        culture:[
            {key: "Centralised decision-making", value: "High", description:"Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders.”},            
            {key: "Managers’ influence ", value: "High", description:"Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements.”},
            {key: "Deference ", value: "High", description:"Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process.”},
            {key: "Establish trust ", value: "High", description:"Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process.”},
            {key: "Building relationships ", value: "High", description:"Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success.”},
            {key: "Communication context ", value: "High", description:"Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders.”},


        ]
    },


    
    
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
        country:"Australia",
        code:"AU",
        culture:[
            { key: "Openness and Honesty", value: "High", description:"Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
            { key: "Gender preference", value: "High", description:"Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values."},
            { key: "Aiming for quick results", value: "Moderate", description:"Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress."},
            { key: "Face saving", value: "Moderate" , description:"Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed."},
            { key: "Take responsibility", value: "Low" , description:"Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion."},
            { key: "Hidden agenda", value: "Low" , description:"Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration."},
            { key: "Solution-focused requirements", value: "Low" , description:"Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs."},
            { key: "Collaborative decision-making", value: "N/A" , description:"Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives."},
            { key: "Managers’ influence", value: "N/A" , description:"Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements."},
            { key: "Establish trust", value: "N/A" , description:"Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process."},
            { key: "Solving conflicts by compromising", value: "N/A" , description:"Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution."},
            { key: "Recognition of uncertainty", value: "N/A" , description:"Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning."},
            { key: "Clients’ resistance", value: "N/A" , description:"Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations."}
        ]
    }
]
  

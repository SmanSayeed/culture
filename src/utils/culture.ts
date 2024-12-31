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
        country:"Australia",
        code:"AU",
        culture:[
           { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." } 
        ]
    },

    

]
  

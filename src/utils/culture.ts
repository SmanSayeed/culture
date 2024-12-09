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

    {
        country:"Albania",
        code:"AL",
        culture:[
            { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders.”},
            { key: "Managers’ influence ", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements.”},
            { key: "Deference ", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process.”},
            { key: "Establish trust ", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process.”},
            { key: "Building relationships ", value: "High",description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success.”},
            { key: "Communication context ", value: "High",description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders.”},
            { key: "Gender preference ", value: "High",description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values.”},
            { key: "Clients’ resistance ", value: "High",description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations.”},
            { key: "Solving conflicts by favoritism ", value: "Moderate",description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process.”},
            { key: "Avoiding conflicts*", value: "Moderate",description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders.”},
            { key: "Hierarchical structure ",value: "Moderate",description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members.”},
            { key: "Coordination and collaboration/Tearm work ",value: "Moderate",description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project.”},
            { key: "Subordinate avoid taking risks ",value: "Moderate",description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance.”},
            { key: "Aiming for quick results ",value: "Moderate",description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress.”},
            { key: "Face saving ",value: "Moderate",description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed.”},
            { key: "Punctuality ",value: "Low",description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met.”},
            { key: "Safeguard workmates’ jobs ",value: "Low",description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles.”},
            { key: "Belief in expertise ",value: "Low",description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations.”},
            { key: "Solution-focused requirements ",value: "Low",description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs.”}

        ]
    }


]
  

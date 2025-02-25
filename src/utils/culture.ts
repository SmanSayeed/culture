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
    
    {
        country:"New Zealand",
        code:"NZ",
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

    {
     country: "Albania",
     code: "AL",
     culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Algeria",
    code: "DZ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

{
    country: "Angola",
    code: "AO",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},
    

    
    {
    country: "Bolivia",
    code: "BO",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


{
    country: "Croatia",
    code: "HR",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    
    {
    country: "El Salvador",
    code: "SV",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


     {
    country: "Ghana",
    code: "GH",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Guatemala",
    code: "GT",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

       {
    country: "Iran",
    code: "IR",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

 {
    country: "Jordan",
    code: "JO",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Kuwait",
    code: "KW",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "North Macedonia",
    code: "NM",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Paraguay",
    code: "PY",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Peru",
    code: "PE",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Senegal",
    code: "SN",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Serbia",
    code: "RS",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Sao Tome and Principe",
    code: "SZ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Tunisia",
    code: "TN",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


{
    country: "Argentina",
    code: "AR",
    culture: [
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." }
    ]
},


    {
    country: "Italy",
    code: "IT",
    culture: [
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." }
    ]
},


    {
    country: "Armenia",
    code: "AM",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Bosnia and Herzegovina",
    code: "BA",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Brazil",
    code: "BR",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Burkina Faso",
    code: "BF",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Montenegro",
    code: "ME",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Morocco",
    code: "MA",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Pakistan",
    code: "PK",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Syria",
    code: "SY",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "United Arab Emirates",
    code: "AE",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Austria",
    code: "AT",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Azerbaijan",
    code: "AZ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Kazakhstan",
    code: "KZ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Bangladesh",
    code: "BD",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Colombia",
    code: "CO",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Ecuador",
    code: "EC",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Egypt",
    code: "EG",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Ethiopia",
    code: "ET",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Georgia",
    code: "GE",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Libya",
    code: "LY",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Mexico",
    code: "MX",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Nigeria",
    code: "NG",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Qatar",
    code: "QA",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

     {
    country: "Venezuela",
    code: "VE",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Belarus",
    code: "BY",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},
{
    country: "Bulgaria",
    code: "BG",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},
    

    {
    country: "Belgium",
    code: "BE",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Bhutan",
    code: "BT",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Canada",
    code: "CA",
    culture: [
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
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Cape Verde",
    code: "CV",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},
{
    country: "Mozambique",
    code: "MZ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},
{
    country: "Namibia",
    code: "NA",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},
{
    country: "Sri Lanka",
    code: "LK",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
        country: "Chile",
        code: "CL",
        culture: [
            { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
            { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
            { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
            { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
            { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
            { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
            { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
            { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
            { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
            { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
            { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
            { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
            { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
            { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
            { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
            { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
            { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
            { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
            { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
            { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
        ]
    },
    {
        country: "Romania",
        code: "RO",
        culture: [
            { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
            { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
            { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
            { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
            { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
            { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
            { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
            { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
            { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
            { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
            { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
            { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
            { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
            { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
            { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
            { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
            { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
            { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
            { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
            { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
        ]
    },
    {
        country: "Saudi Arabia",
        code: "SA",
        culture: [
            { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
            { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
            { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
            { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
            { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
            { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
            { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
            { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
            { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
            { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
            { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
            { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
            { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
            { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
            { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
            { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
            { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
            { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
            { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
            { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
        ]
    },
    {
        country: "Turkey",
        code: "TR",
        culture: [
            { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
            { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
            { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
            { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
            { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
            { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
            { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
            { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
            { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
            { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
            { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
            { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
            { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
            { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
            { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
            { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
            { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
            { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
            { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
            { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
        ]
    },



    {
    country: "China",
    code: "CN",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Costa Rica",
    code: "CR",
    culture: [
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Czech Republic",
    code: "CZ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Greece",
    code: "GR",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Denmark",
    code: "DK",
    culture: [
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Dominican Republic",
    code: "DO",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Puerto Rico",
    code: "PR",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Estonia",
    code: "EE",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Finland",
    code: "FI",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Latvia",
    code: "LV",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


{
    country: "Fiji",
    code: "FJ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "France",
    code: "FR",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "South Korea",
    code: "KR",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Germany",
    code: "DE",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Honduras",
    code: "HN",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Malawi",
    code: "MW",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Sierra Leone",
    code: "SL",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Tanzania",
    code: "TZ",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Zambia",
    code: "ZM",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Hong Kong",
    code: "HK",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Hungary",
    code: "HU",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." }
    ]
},


    {
    country: "Iceland",
    code: "IS",
    culture: [
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Netherlands",
    code: "NL",
    culture: [
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Norway",
    code: "NO",
    culture: [
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    
    {
    country: "India",
    code: "IN",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Philippines",
    code: "PH",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Indonesia",
    code: "ID",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Ireland",
    code: "IE",
    culture: [
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Israel",
    code: "IL",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Jamaica",
    code: "JM",
    culture: [
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Japan",
    code: "JP",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." }
    ]
},

    {
    country: "Kenya",
    code: "KE",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Lebanon",
    code: "LB",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Lithuania",
    code: "LT",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Luxembourg",
    code: "LU",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Malaysia",
    code: "MY",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    
    {
    country: "Malta",
    code: "MT",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Moldova",
    code: "MD",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Taiwan",
    code: "TW",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Thailand",
    code: "TH",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},



    {
    country: "Mongolia",
    code: "MN",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Vietnam",
    code: "VN",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    
    {
    country: "Nepal",
    code: "NP",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Panama",
    code: "PA",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Team work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Poland",
    code: "PL",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    
    {
    country: "Portugal",
    code: "PT",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Uruguay",
    code: "UY",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Russia",
    code: "RU",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Suriname",
    code: "SM",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Empathy with users", value: "High", description: "Empathy with users involves understanding and sharing the feelings, needs, and perspectives of end users, ensuring that the requirements reflect their real-world experiences and challenges." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Singapore",
    code: "SG",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Coordination and collaboration/Tearm work", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Slovakia",
    code: "SK",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Slovenia",
    code: "SI",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Spain",
    code: "ES",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "Ukraine",
    code: "UA",
    culture: [
        { key: "Centralised decision-making", value: "High", description: "Centralized decision-making refers to a process where decisions about requirements, priorities, and solutions are made by a single authority or a small group of individuals, rather than being distributed among multiple stakeholders." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Deference", value: "High", description: "Deference refers to showing respect or yielding to the opinions, decisions, or authority of others, often influencing how stakeholders interact, collaborate, and make decisions within the process." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Solving conflicts by favoritism", value: "Moderate", description: "Solving conflicts by favoritism involves resolving disagreements by prioritizing the interests or preferences of certain stakeholders over others, potentially undermining fairness and collaboration in the decision-making process." },
        { key: "Avoiding conflicts*", value: "Moderate", description: "Avoiding conflicts means trying to prevent disagreements by avoiding issues that could cause tension or problems among stakeholders (*Asian regional influence only)." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Hierarchical structure", value: "Low", description: "Hierarchical structure refers to an organizational setup where decision-making authority is clearly defined in levels, with higher-level managers having more control over requirements and decisions than lower-level team members." },
        { key: "Punctuality", value: "Low", description: "Punctuality refers to the importance of meeting deadlines and being on time for meetings and deliverables, ensuring that the project progresses smoothly and stakeholder expectations are met." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    
    {
    country: "South Africa",
    code: "ZA",
    culture: [
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." }
    ]
},

    {
    country: "Sweden",
    code: "SE",
    culture: [
        { key: "Letting the strongest win", value: "High", description: "Letting the strongest win refers to a decision-making approach where the most dominant or influential stakeholder, idea, or solution is allowed to prevail, often based on authority or expertise, rather than consensus or equality among all participants." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender segregation", value: "Moderate", description: "Gender segregation refers to the division of roles, responsibilities, or decision-making processes based on gender, which can impact team dynamics, stakeholder involvement, and the inclusion of diverse perspectives." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Switzerland",
    code: "CH",
    culture: [
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},


    {
    country: "Trinidad and Tobago",
    code: "TT",
    culture: [
        { key: "Building relationships", value: "High", description: "Building relationships involves establishing trust, open communication, and mutual respect among stakeholders, which fosters collaboration, facilitates the gathering of accurate requirements, and supports long-term project success." },
        { key: "Clients’ resistance", value: "High", description: "Clients' resistance refers to the reluctance or opposition from clients to accept proposed requirements, changes, or solutions, often due to concerns about cost, usability, or alignment with their needs or expectations." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results means focusing on fast decision-making and rapid delivery of requirements or solutions, often prioritizing speed over thorough analysis or long-term planning." },
        { key: "Dress code", value: "High", description: "Dress Code refers to the expected or preferred style of clothing in the workplace or during meetings, which can influence professionalism, communication, and how stakeholders perceive each other during the requirements gathering process." },
        { key: "Communication context", value: "Moderate", description: "Communication context refers to the surrounding factors, such as cultural norms, language, interpretation, and understanding among stakeholders." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Coordination and collaboration/Teamwork", value: "Moderate", description: "Coordination and collaboration/teamwork refers to working together as a group to share information, align goals, and make collective decisions to ensure that requirements are accurately defined and met throughout the project." },
        { key: "Relying on previous projects", value: "Moderate", description: "Relying on previous projects means using lessons, templates, or solutions from past projects as a basis for making decisions and defining requirements in current projects, to save time and reduce uncertainty." },
        { key: "Safeguard workmates’ jobs", value: "Low", description: "Safeguarding workmates' jobs refers to actions taken to protect the employment and job security of colleagues, which may influence decisions or behaviors to avoid actions that could negatively impact the team’s stability or individual roles." },
        { key: "Belief in expertise", value: "Low", description: "Belief in expertise refers to the reliance on the knowledge, skills, and experience of specialists or experts to guide decision-making and shape requirements, often leading to a greater trust in their input and recommendations." }
    ]
},


    {
    country: "United Kingdom",
    code: "GB",
    culture: [
        { key: "Aiming for quick results", value: "High", description: "Aiming for quick results reflects a cultural preference for immediate achievements and efficiency over long-term planning and gradual progress." },
        { key: "Collaborative decision-making", value: "High", description: "Collaborative decision-making involves engaging multiple stakeholders to collectively analyze, discuss, and agree on requirements, fostering shared ownership and diverse perspectives." },
        { key: "Managers’ influence", value: "High", description: "Managers' influence refers to the impact that managerial decisions, priorities, and authority have on shaping the direction, scope, and implementation of requirements." },
        { key: "Establish trust", value: "High", description: "Establish trust refers to building confidence among stakeholders through transparent communication, reliability, and consistent actions, which fosters cooperation and effective collaboration throughout the process." },
        { key: "Solving conflicts by compromising", value: "High", description: "Solving conflicts by compromising involves finding a middle ground between differing stakeholder interests or priorities, ensuring that all parties make concessions to reach an acceptable solution." },
        { key: "Recognition of uncertainty", value: "High", description: "Recognition of uncertainty involves acknowledging and addressing unknowns, ambiguities, or risks in the requirements process, allowing for flexibility and adaptability in decision-making and planning." },
        { key: "Subordinate avoid taking risks", value: "High", description: "Subordinates avoiding taking risks means that lower-level team members may hesitate to make decisions or propose new ideas due to fear of making mistakes or facing negative consequences, often relying on higher authority for guidance." },
        { key: "Openness and Honesty", value: "Moderate", description: "Openness is about sharing ideas freely, while honesty means being truthful. In individualistic cultures like the US, people are direct and open, valuing clear communication. In collectivist cultures like China, people may express honesty more subtly to maintain harmony." },
        { key: "Gender preference", value: "Moderate", description: "Gender Preference reflects cultural priorities between competitive, performance-driven traits and collaborative, user-centered values." },
        { key: "Take responsibility", value: "Moderate", description: "Take responsibility reflects a cultural tendency to prioritize accountability and ownership in decision-making and task completion." },
        { key: "Hidden agenda", value: "Moderate", description: "Hidden agenda refers to the presence of unspoken motives or goals that influence stakeholder interactions and decision-making, potentially impacting transparency and collaboration." },
        { key: "Face saving", value: "Low", description: "Face saving reflects a cultural emphasis on maintaining respect and avoiding embarrassment, influencing how feedback is given, decisions are communicated, and conflicts are managed." },
        { key: "Solution-focused requirements", value: "Low", description: "Solution-focused requirements emphasize defining needs based on predefined solutions, often prioritizing implementation details over exploring underlying problems or user needs." },
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
},

    {
    country: "United States",
    code: "US",
    culture: [
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
        { key: "Employees’ attitude", value: "Low", description: "Employees’ attitude is the collective mindset and behavior of employees in the workplace, shaped by cultural values, perceptions, and interactions with organizational structures." }
    ]
}

    


    
    
    
    

    

]
  

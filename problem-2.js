const buildProfileCard = (user)=>{
    const { name, title, company} = user;

return `${name}
${title} at ${company}`;
};

const user = {
    name: "Alif",
    title: "Developer",
    company: "programming Hero"
    }

    console.log(buildProfileCard(user)) 
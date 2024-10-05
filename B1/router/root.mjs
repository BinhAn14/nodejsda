import express from "express"
const router = express.Router()

let workerExperience = [{
        name: "Front End Developer",
        start_date: "Jan 2014",
        end_date: "Dec 2015",
        description: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
    },
    {
        name: "Web Developer ",
        start_date: "Mar 2012",
        end_date: "Dec 2014",
        description: "Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    },
    {
        name: "Graphic Designer",
        start_date: "Jun 2010",
        end_date: "Mar 2012",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
]
let education = [{
        name: "W3Schools.com",
        start_date: "Forever",
        end_date: "Forever",
        description: "Web Development! All I need to know in one place."
    },
    {
        name: "London Business School",
        start_date: "2013",
        end_date: "2015",
        description: "Master Degree",
    },
    {
        name: "School of Coding",
        start_date: "2010",
        end_date: "2013",
        description: "Bachelor Degree.",
    },
]




function buildEducation() {
    let data = '';
    education.forEach((element) => {
        data += buildItem(element);
    });
    return data;
}


router.get("/about", (req, res) => {
    res.send(`<h1>This is about page<h1>`)
})
router.get("/", (req, res) => {
    res.render("index", { title: "Home", workerExperience, education })
});

export default router;
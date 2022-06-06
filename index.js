const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.resolve(__dirname, '/.env') });
const app = express();
const bodyParser = require('body-parser')

app.use(cors());


// parse application/json
app.use(bodyParser.json());

const port = process.env.port || 3001;

// data is hardcoded due to time restrictions but this should be separate collections in mongodb
const database = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "admin",
        password: "admin"
    }
];

// data is hardcoded due to time restrictions but this should be separate collections in mongodb
const Information = [
    {
        "id": 1,
        "name": "OpenCRVS",
        "desc": "Plan International and partners are building an open-source digital CRVS system that works in every country and for every individual. OpenCRVS will be free and adaptable for different country contexts,",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/opencrvs.png",
        "country": "USA",
        "skills": ['Typescript', 'React', 'Redux'],
        "resources": [
            {
                "id": 1,
                "name": "Alex",
                "designation": "Full stack developer"
            },
            {
                "id": 2,
                "name": "Fred",
                "designation": "Full stack developer"
            },
            {
                "id": 3,
                "name": "Pascal",
                "designation": "Full stack developer"
            }
        ]
    },
    {
        "id": 2,
        "name": "StoryWeaver",
        "desc": "StoryWeaver is an open source platform by Pratham Books for multilingual children’s stories. It addresses all the issues around the lack of content by using an open access framework and technology as force multipliers combined with a platform that supports translation and re-mixing av stories.",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/storyweaver.png",
        "country": "Germany",
        "skills": ['Typescript', 'React', 'Redux'],
        "resources": [
            {
                "id": 1,
                "name": "Alex",
                "designation": "Frontend developer"
            }
        ]
    },
    {
        "id": 3,
        "name": "Curious Learning",
        "desc": "Curious Learning works with partners to curate & localize and distribute & measure free open source apps that empowers everyone to have the opportunity to learn to read. Then we make sure we measure what works and what doesn’t work.",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/curiouslearning.png",
        "country": "Pakistan",
        "skills": ['Typescript', 'React', 'Redux'],
        "resources": [
            {
                "id": 2,
                "name": "Fred",
                "designation": "Full stack developer"
            },
            {
                "id": 3,
                "name": "Pascal",
                "designation": "Full stack developer"
            }
        ]
    },
    {
        "id": 4,
        "name": "Primero",
        "desc": "Primerio is an open source software platform that helps social services, humanitarian and development workers manage protection-related data, with tools that facilitate case management, incident monitoring and family tracing and reunification.",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/primero.png",
        "country": "Pakistan",
        "skills": ['Typescript', 'React', 'Redux'],
        "resources": [
            {
                "id": 3,
                "name": "Pascal",
                "designation": "Database Developer"
            }
        ]
    }
];

// data is hardcoded due to time restrictions but this should be separate collections in mongodb
const projects = [
    {
        "id": 1,
        "name": "OpenCRVS",
        "desc": "Plan International and partners are building an open-source digital CRVS system that works in every country and for every individual. OpenCRVS will be free and adaptable for different country contexts,",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/opencrvs.png",
        "country": "USA",
        "skills": ['Typescript', 'React', 'Redux']
    },
    {
        "id": 2,
        "name": "StoryWeaver",
        "desc": "StoryWeaver is an open source platform by Pratham Books for multilingual children’s stories. It addresses all the issues around the lack of content by using an open access framework and technology as force multipliers combined with a platform that supports translation and re-mixing av stories.",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/storyweaver.png",
        "country": "Germany",
        "skills": ['Typescript', 'React', 'Redux']
    },
    {
        "id": 3,
        "name": "Curious Learning",
        "desc": "Curious Learning works with partners to curate & localize and distribute & measure free open source apps that empowers everyone to have the opportunity to learn to read. Then we make sure we measure what works and what doesn’t work.",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/curiouslearning.png",
        "country": "Pakistan",
        "skills": ['Typescript', 'React', 'Redux']
    },
    {
        "id": 4,
        "name": "Primero",
        "desc": "Primerio is an open source software platform that helps social services, humanitarian and development workers manage protection-related data, with tools that facilitate case management, incident monitoring and family tracing and reunification.",
        "image": "https://backlog.digitalpublicgoods.net/assets/img/primero.png",
        "country": "Pakistan",
        "skills": ['Typescript', 'React', 'Redux']
    }
];

app.get('/projects', (req, res) => {
    res.status(200).json(Information);
});

app.get('/projects-users', (req, res) => {
    res.status(200).json(projects);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const userData = database.find((user) => user.username == username && user.password == password);
    res.status(200).json(userData);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
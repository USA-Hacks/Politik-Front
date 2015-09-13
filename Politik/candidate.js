var Politik = window.Politik = window.Politik || {};
Politik.candidate = {};

Politik.candidate.getCandidate = function(score, keywords, callback) {
    var closestDiff = 3;
    var closestCandidate = undefined;

    for (var name in Politik.candidate.candidates) {
        var candidate = Politik.candidate.candidates[name];

        var diff = Math.abs(candidate.score - score);

        if (diff < closestDiff) {
            closestDiff = diff;
            closestCandidate = candidate;
        }
    }

    callback(closestCandidate);
};

Politik.candidate.candidates = {};

Politik.candidate.candidates.bernie = {
    name: "Bernie Sanders",
    party: "Democrat",
    score: -0.8,
    link: "https://berniesanders.com/",
    img: "img/Bernie_Sanders.jpg",
    blurb: "Sanders is known as a leading progressive voice on issues such as income inequality, universal healthcare, parental leave, climate change, LGBT rights, and campaign finance reform.",
    issues: {
        "racism": -1,
        "college": -1,
        "gay": -1
    }
};

Politik.candidate.candidates.hildog = {
    name: "Hillary Clinton",
    party: "Democrat",
    score: -0.3,
    link: "https://www.hillaryclinton.com/",
    img: "img/Hillary_Clinton.jpg",
    blurb: "Hillary Diane Rodham Clinton is an American politician who served as the 67th United States Secretary of State under President Barack Obama from 2009 to 2013.",
    issues: {
        "gay": -1,
        "college": -1
    }
};

Politik.candidate.candidates.omally = {
    name: "Martin O'Malley",
    party: "Democrat",
    score: -0.6,
    link: "https://martinomalley.com/",
    img: "img/Martin_OMalley.jpg",
    blurb: "Martin O'Malley has spent his entire career fighting for underserved and middle-class communities. He has served as the Governor of Maryland, Mayor of Baltimore, and a city councilor-earning a reputation as a bold, progressive, and pragmatic executive who is willing to take on our toughest shared challenges.",
    issues: {
        "college": -1,
        "environment": -1
    }
};

Politik.candidate.candidates.cruz = {
    name: "Ted Cruz",
    party: "Republican",
    score: 1.0,
    link: "https://www.tedcruz.org/",
    img: "img/Ted_Cruz.jpg",
    blurb: "Throughout his entire life, Ted Cruz has proven to be a passionate and effective fighter for limited government, economic growth, and the Constitution.",
    issues: {
        "environment": 1,
        "immigration": 1,
        "military": 1,
        "guns": 1,
        "jeep": 1,
        "gay": -1
    }
};

Politik.candidate.candidates.trump = {
    name: "Donald Trump",
    party: "Republican",
    score: 0.4,
    link: "https://www.donaldjtrump.com/",
    img: "img/Donald_Trump.jpg",
    blurb: "Donald John Trump (born June 14, 1946) is an American real estate developer, television personality, business author and political candidate. He is the chairman and president of The Trump Organization and is the founder of Trump Entertainment Resorts.",
    issues: {
        "immigration": 1,
        "abortion": 1
    }
}

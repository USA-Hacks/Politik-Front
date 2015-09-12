var Politik = window.Politik = window.Politik || {};
Politik.candidate = {};

Politik.candidate.getCandidate = function(score, callback) {
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
    score: -1.0,
    link: "https://berniesanders.com/",
    img: "Bernie_Sanders.jpg",
    blurb: "Sanders is known as a leading progressive voice on issues such as income inequality, universal healthcare, parental leave, climate change, LGBT rights, and campaign finance reform."
};

Politik.candidate.candidates.hildog = {
    name: "Hillary Clinton",
    party: "Democrat",
    score: -0.3,
    link: "https://www.hillaryclinton.com/",
    img: "Hillary_Clinton.jpg",
    blurb: "Hillary Diane Rodham Clinton is an American politician who served as the 67th United States Secretary of State under President Barack Obama from 2009 to 2013."
};

Politik.candidate.candidates.omally = {
    name: "Martin O'Malley",
    party: "Democrat",
    score: -0.6,
    link: "https://martinomalley.com/",
    img: "Martin_OMalley.jpg",
    blurb: "Martin O'Malley has spent his entire career fighting for underserved and middle-class communities. He has served as the Governor of Maryland, Mayor of Baltimore, and a city councilor-earning a reputation as a bold, progressive, and pragmatic executive who is willing to take on our toughest shared challenges."
};

Politik.candidate.candidates.cruz = {
    name: "Ted Cruz",
    party: "Republican",
    score: 1.0,
    link: "https://www.tedcruz.org/",
    img: "Ted_Cruz.jpg",
    blurb: "Throughout his entire life, Ted Cruz has proven to be a passionate and effective fighter for limited government, economic growth, and the Constitution."
};

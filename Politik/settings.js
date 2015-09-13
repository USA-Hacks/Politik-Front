var Politik = window.Politik = window.Politik || {};
var endpoint = "http://104.131.49.99";

Politik.settings = {
    enabled: true,
    endpoints: {
        score: endpoint + "/calc_score",
        post: endpoint + "/store_view",
        uscore: endpoint + "/get_total_score"
    }
};

selection=document.getSelection();
if(!selection) {
    void(selection=prompt('Acronym please',''))
};

resolved = 'IDK';

var dict = {
    "AHC" : "application health check, now known as NVS, Nexus Vulnerability Scanner",
    "CHCB" : "content_hashes_contained_by table in Redshift",
    "CHCE" : "coord_health_check_extras table in the datamarts",
    "CIP" : "Component Information Panel",
    "CIS" : "Component Info Service (the thing I wrote lots of stories for when porting to HBase). a.k.a. IQS or IDS or Component Identity Service, legacy, Solr index of some sort (search elsewhere in this file)",
    "DPA" : "Data Pipeline Archive. Includes the original binary downloaded from the original repo plus some metadata. We can use this to perform a redrive without going back to the original repo. In HBase DPA path's don't contain our shas, instead they contain a unique identifier assigned by the repo (each repo may do something different)",
    "DSP" : "Alvin thinks it's: Data Service Platform. HDS running on prem. Alvin views it as: HDS is Sonatype's instantiation of the DSP.",
    "HDS" : "hosted data services (skynet team works on this)",
    "IDS" : "Identity Data Services. A rebranding of componentinfo-service a.k.a. CIS or IQS",
    "LORT" : "license obligation review tool, internal tool, for Data Quality team and Customer Success group to work with customer's legal teams to know how we've researched and marked up our obligations",
    "MLT" : "more like this, part of aname, AST goes over each content has, extract AST and puts it in ElasticSearch; MLT goes through each content hash and gets AST, submits to cluster and finds similarities; final result is content hash, cluster hash, and score between .9 and 1 where 1.0 is exactly equal",
    "NDE" : "Nexus Disconnected Environment",
    "NVD" : "National Vulnerability Database",
    "NVS" : "Nexus Vulnerability Scanner https://www.sonatype.com/appscan-upload formerly known as AHC",
    "PI" : "Package Implication, as in Slack's #data-security-pi",
    "SRE" : "site reliability engineering, sub-team in ops. Handle AWS best practices, setting up dashboards?",
    "RSO": "repository.sonatype.org also see NXRM",
};

for(var key in dict) {
    if (key == selection) {
        var value = dict[key];
        alert(value);
        break;
    }
}

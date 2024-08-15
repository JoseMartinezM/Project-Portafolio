const sidebar = document.querySelector(".sidebar");
const content = document.querySelector("#content");
const ecosystem = document.querySelector("#ecosystem");
const license = document.querySelector("#license");
const purpose = document.querySelector("#purpose");
const free = document.querySelector("#free");
const paid = document.querySelector("#paid");
const arrow = document.querySelector(".detail-btn");
const panel = document.querySelector(".panel");
const close = document.querySelector(".close-panel");
const container = document.querySelector(".container");
const minisidebar = document.querySelector("#show-sidebar");
const graphtitle = document.querySelector(".hidden-title-graph");
const list = document.querySelector(".hidden-list");
const elementsLi = document.querySelectorAll('#ai-list li');
const aiInfo = document.querySelector(".hidden-info");
const infoTitle = document.getElementById('ai-name');
const ibackButton = document.querySelector('back');
const licensefilter = document.querySelector('.license-filters');
const contentfilter = document.querySelector('.content-filters');
const ecosystemfilter = document.querySelector('.ecosystem-filters');
const purposefilter = document.querySelector('.purpose-filters');
const freefilter = document.querySelector('.free-filters');
const paidfilter = document.querySelector('.paid-filters');
const hiddenfilters = document.querySelector('.hidden-filters');
const info = document.querySelector('.info-tool');
const favoritesbutton = document.querySelector('#favorites');

function toggleSidebar() {
    sidebar.classList.toggle("hidden-sidebar");
    panel.classList.remove("show-panel"); 
    list.classList.add("hidden-list");
    container.classList.add("show-container");
    aiInfo.classList.remove("info");
    hiddenfilters.classList.add("hidden-filters");
}

content.addEventListener("click", () => {
    toggleSidebar();
    graphtitle.textContent = "Content";
    graphtitle.classList.add("title-graph");
    contentfilter.classList.remove("hide-elements");
    ecosystemfilter.classList.add("hide-elements");
    purposefilter.classList.add("hide-elements");
    freefilter.classList.add("hide-elements"); 
    paidfilter.classList.add("hide-elements"); 
    licensefilter.classList.add("hide-elements"); 
    info.classList.add("hide-elements");
});


ecosystem.addEventListener("click", () => {
    toggleSidebar();
    graphtitle.textContent = "Ecosystem";
    graphtitle.classList.add("title-graph");
    contentfilter.classList.add("hide-elements");
    ecosystemfilter.classList.remove("hide-elements");
    purposefilter.classList.add("hide-elements");
    freefilter.classList.add("hide-elements"); 
    paidfilter.classList.add("hide-elements"); 

});

license.addEventListener("click", () => {
    toggleSidebar();
    graphtitle.textContent = "License";
    graphtitle.classList.add("title-graph");
    contentfilter.classList.add("hide-elements");
    ecosystemfilter.classList.add("hide-elements");
    purposefilter.classList.add("hide-elements");
    freefilter.classList.add("hide-elements"); 
    paidfilter.classList.add("hide-elements"); 
    licensefilter.classList.remove("hide-elements"); 
});


purpose.addEventListener("click", () => {
    toggleSidebar();
    graphtitle.textContent = "Purpose";
    graphtitle.classList.add("title-graph");
    contentfilter.classList.add("hide-elements");
    ecosystemfilter.classList.add("hide-elements");
    purposefilter.classList.remove("hide-elements");
    freefilter.classList.add("hide-elements"); 
    paidfilter.classList.add("hide-elements"); 
    licensefilter.classList.add("hide-elements"); 
});

free.addEventListener("click", () => {
    toggleSidebar();
    graphtitle.textContent = "Free";
    graphtitle.classList.add("title-graph");
    contentfilter.classList.add("hide-elements");
    ecosystemfilter.classList.add("hide-elements");
    purposefilter.classList.add("hide-elements");
    freefilter.classList.remove("hide-elements"); 
    paidfilter.classList.add("hide-elements"); 
    licensefilter.classList.add("hide-elements"); 
});

paid.addEventListener("click", () => {
    toggleSidebar();
    graphtitle.textContent = "Paid";
    graphtitle.classList.add("title-graph");
    contentfilter.classList.add("hide-elements");
    ecosystemfilter.classList.add("hide-elements");
    purposefilter.classList.add("hide-elements");
    freefilter.classList.add("hide-elements"); 
    paidfilter.classList.remove("hide-elements"); 
    licensefilter.classList.add("hide-elements"); 
});


minisidebar.addEventListener("click", toggleSidebar);

arrow.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.add("hidden-list");  
    hiddenfilters.classList.remove("hidden-filters");
});

proprietaryButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters");
    showAllToolsByProprietary();
});

openSourceButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByOpenSource();
});

// content
codeButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByCode();
});

textButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsByText();
});
imageButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");
    hiddenfilters.classList.add("hidden-filters");    
    showAllToolsByImage();
});
videoButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByVideo();
});

voiceButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsByVoice();
});

musicButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByMusic();
});

Button3d.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsBy3D();
});

cloudservicessButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByCloudServices();
});

foundationmodelsButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByFoundationModels();
});

applicationsButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByApplications();
});

infrastructureButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByInfrastructure();
});

dataandintegrationButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByDataIntegrationServices();
});

// PURPOSE
contentgenerationButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsByContentGeneration();
});
/*
visualgenerationButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    showAllToolsByVisualGeneration();
});
*/

speechgenerationButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsBySpeechGeneration();
});

insightsButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByCustomerInsights();
});

employeeengagementButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByEmployeeEngagement();
});

technicaldocumentationButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByTechnicalDocumentation();
});

codewritingdButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByCodeWriting();
});

visualsgenerationButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsByVisualsGeneration();
});

customersupportButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByCustomerSupport();
});

generalpurposeButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsByGeneralPurpose();
});

//  FREE
freetrialButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsByFreeTrial();
});

freeButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByFree();
});

freemiumButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByFreemium();
});

freemiumButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsByFreemium();
});

// PAID
subscriptionbasedButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");   
    hiddenfilters.classList.add("hidden-filters"); 
    showAllToolsBySubscriptionBased();
});

tokenbasedButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list"); 
    hiddenfilters.classList.add("hidden-filters");   
    showAllToolsByTokenBased();
});

paidmultipleButton.addEventListener("click", () => {
    panel.classList.toggle("show-panel");
    list.classList.remove("hidden-list");  
    hiddenfilters.classList.add("hidden-filters");  
    showAllToolsByPaidMultiple();
});

close.addEventListener("click", () => {
    panel.classList.toggle("show-panel");      
    list.classList.add("hidden-list");
    aiInfo.classList.remove("info");
    hiddenfilters.classList.add("hidden-filters");
});

elementsLi.forEach(function(li) {
    li.addEventListener('click', function() {
        var selectedAi = this.textContent;
        console.log(selectedAi);
        list.classList.add("hidden-list");
        infoTitle.textContent = selectedAi;
        aiInfo.classList.add("info");
    });
});

back.addEventListener("click", () => {
    aiInfo.classList.remove("info");
    list.classList.remove("hidden-list");
    licensefilter.classList.add("hidden");
});

//LICCENSE
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de licencia
    const licenseButton = document.getElementById('license');

    // Agregar un evento de clic al botón de licencia
    licenseButton.addEventListener('click', function() {
        // Llamar a la función para crear la gráfica de licencia
        fetch('/Tools/graphlicense')
            .then(response => response.json())
            .then(data => {
                const labels = data.map(item => item.license);
                const values = data.map(item => item.count);
                createPieChartLicense(values, labels, 'pie-chart');
            })
            .catch(error => console.error('Error al obtener datos:', error));
    });
});

function createPieChartLicense(data, labels, chartId) {
    var ctx = document.getElementById('chart-container').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {
         
        }
    });
}


//CONTENT
document.addEventListener('DOMContentLoaded', function() {
    const contentButton = document.getElementById('content');
    contentButton.addEventListener('click', function() {
    fetch('/Tools/graphcontent')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.license);
            const values = data.map(item => item.count);
            createPieChartContent(values, labels, 'pie-chart');
        })
        .catch(error => console.error('Error al obtener datos:', error));});
});

function createPieChartContent(data, labels, chartId) {
    var ctx = document.getElementById('chart-container').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {
         
        }
    });
}

//ECOSYSTEM
document.addEventListener('DOMContentLoaded', function() {
    const ecosystemButton = document.getElementById('ecosystem');
    ecosystemButton.addEventListener('click', function() {
    fetch('/Tools/graphecosystem')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.license);
            const values = data.map(item => item.count);
            createPieChartEcosystem(values, labels, 'pie-chart');
        })
        .catch(error => console.error('Error al obtener datos:', error));});
});

function createPieChartEcosystem(data, labels, chartId) {
    var ctx = document.getElementById('chart-container').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {
         
        }
    });
}

//purpose
document.addEventListenerPurpose('DOMContentLoaded', function() {
    const purposeButton = document.getElementById('purpose');
    purposeButton.addEventListener('click', function() {
    fetch('/Tools/graphpurpose')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.license);
            const values = data.map(item => item.count);
            createPieChart(values, labels, 'pie-chart');
        })
        .catch(error => console.error('Error al obtener datos:', error));});
});

function createPieChartPurpose(data, labels, chartId) {
    var ctx = document.getElementById('chart-container').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {
         
        }
    });
}

//graphfree
document.addEventListener('DOMContentLoaded', function() {
    const freeButton = document.getElementById('free');
    freeButton.addEventListener('click', function() {
    fetch('/Tools/graphfree')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.license);
            const values = data.map(item => item.count);
            createPieChartFree(values, labels, 'pie-chart');
        })
        .catch(error => console.error('Error al obtener datos:', error));});
});

function createPieChartFree(data, labels, chartId) {
    var ctx = document.getElementById('chart-container').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {
         
        }
    });
}

//graphpaid
document.addEventListenerPaid('DOMContentLoaded', function() {
    const paidButton = document.getElementById('paid');
    paidButton.addEventListener('click', function() {
    fetch('/Tools/graphpaid')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.license);
            const values = data.map(item => item.count);
            createPieChart(values, labels, 'pie-chart');
        })
        .catch(error => console.error('Error al obtener datos:', error));})
});

function createPieChartPaid(data, labels, chartId) {
    var ctx = document.getElementById('chart-container').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {
         
        }
    });
}
const tools = document.querySelector("#tools");
/*
async function showAllTools() {
    try {
        const tools = await fetch('/Tools/name').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    const searchResponse = await fetch(`/Tools/search`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ idtool: tool.idtool })
                        }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("li");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // boton favorite
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}*/

// FILTROS DE CONTENT
// code
async function showAllToolsByCode() {
    try {
        const tools = await fetch('/Tools/code').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// text
async function showAllToolsByText() {
    try {
        const tools = await fetch('/Tools/text').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// image
async function showAllToolsByImage() {
    try {
        const tools = await fetch('/Tools/image').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// video
async function showAllToolsByVideo() {
    try {
        const tools = await fetch('/Tools/video').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// voice
async function showAllToolsByVoice() {
    try {
        const tools = await fetch('/Tools/voice').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// music
async function showAllToolsByMusic() {
    try {
        const tools = await fetch('/Tools/music').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// 3d
async function showAllToolsBy3D() {
    try {
        const tools = await fetch('/Tools/3d').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

/*
// Data
async function showAllToolsByData() {
    try {
        const tools = await fetch('/Tools/data').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            toolsList.appendChild(listItem);
            
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// FILTRAR POR 'Simulation'
async function showAllToolsBySimulation() {
    try {
        const tools = await fetch('/Tools/simulation').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            toolsList.appendChild(listItem);
            
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}
*/

// FILTROS DE ECOSYSTEM
async function showAllToolsByCloudServices() {
    try {
        const tools = await fetch('/Tools/cloudservices').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByFoundationModels() {
    try {
        const tools = await fetch('/Tools/foundationmodels').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByApplications() {
    try {
        const tools = await fetch('/Tools/applications').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByInfrastructure() {
    try {
        const tools = await fetch('/Tools/infrastructure').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByDataIntegrationServices() {
    try {
        const tools = await fetch('/Tools/dataintegrationservices').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

/*
async function showAllToolsByMashupModels() {
    try {
        const tools = await fetch('/Tools/mashupmodels').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            toolsList.appendChild(listItem);
            
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}
*/

// FITROS DE LICENSE
async function showAllToolsByProprietary() {
    try {
        const tools = await fetch('/Tools/proprietary').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByOpenSource() {
    try {
        const tools = await fetch('/Tools/opensource').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// FILTROS DE PURPOSE
async function showAllToolsByContentGeneration() {
    try {
        const tools = await fetch('/Tools/contentgeneration').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

/*
async function showAllToolsByVisualGeneration() {
    try {
        const tools = await fetch('/Tools/visualgeneration').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            toolsList.appendChild(listItem);
            
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}*/

async function showAllToolsBySpeechGeneration() {
    try {
        const tools = await fetch('/Tools/speechgeneration').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByCustomerInsights() {
    try {
        const tools = await fetch('/Tools/customerinsights').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

/*
async function showAllToolsByFraudDetection() {
    try {
        const tools = await fetch('/Tools/frauddetection').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            toolsList.appendChild(listItem);
            
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByInvestmentStrategy() {
    try {
        const tools = await fetch('/Tools/investmentstrategy').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            toolsList.appendChild(listItem);
            
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}*/

async function showAllToolsByEmployeeEngagement() {
    try {
        const tools = await fetch('/Tools/employeeengagement').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByTechnicalDocumentation() {
    try {
        const tools = await fetch('/Tools/technicaldocumentation').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByCodeWriting() {
    try {
        const tools = await fetch('/Tools/codewriting').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByVisualsGeneration() {
    try {
        const tools = await fetch('/Tools/visualsgeneration').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByCustomerSupport() {
    try {
        const tools = await fetch('/Tools/customersupport').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByGeneralPurpose() {
    try {
        const tools = await fetch('/Tools/generalpurpose').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// FILTROS DE FREE
async function showAllToolsByFreeTrial() {
    try {
        const tools = await fetch('/Tools/freetrial').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByFree() {
    try {
        const tools = await fetch('/Tools/free').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByFreemium() {
    try {
        const tools = await fetch('/Tools/freemium').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

// PAID
async function showAllToolsBySubscriptionBased() {
    try {
        const tools = await fetch('/Tools/subscriptionbased').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByTokenBased() {
    try {
        const tools = await fetch('/Tools/tokenbased').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}

async function showAllToolsByPaidMultiple() {
    try {
        const tools = await fetch('/Tools/paidmultiple').then(res => res.json());
        const toolsList = document.getElementById("ai-list");
        toolsList.innerHTML = "";
        
        tools.forEach(tool => {
            const listItem = document.createElement("li");
            listItem.textContent = tool.toolname;
            listItem.id = tool.idtool;
            listItem.onclick = async () => {
                try {
                    list.classList.add("hidden-list");
                    const searchResponse = await fetch(`/Tools/search`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idtool: tool.idtool })
                    }); 
                    
                    const infoResponse = await fetch(`/Tools/info/${tool.idtool}`).then(res => res.json());
                    const info = infoResponse.rows[0]; 
                    const infoTool = document.getElementById("info-tool");
                    infoTool.innerHTML = ""; 

                    const descriptionItem = document.createElement("p");
                    descriptionItem.textContent = info.tooldescription;
                    infoTool.appendChild(descriptionItem);

                    const licenseItem = document.createElement("li");
                    licenseItem.textContent = info.license;
                    infoTool.appendChild(licenseItem);

                    const ecosystemItem = document.createElement("li");
                    ecosystemItem.textContent = info.ecosystem;
                    infoTool.appendChild(ecosystemItem);

                    const contentTypeItem = document.createElement("li");
                    contentTypeItem.textContent = info.contenttype;
                    infoTool.appendChild(contentTypeItem);

                    const purposeItem = document.createElement("li");
                    purposeItem.textContent = info.purpose;
                    infoTool.appendChild(purposeItem);

                    const ratingItem = document.createElement("li");
                    ratingItem.textContent = info.rating;
                    infoTool.appendChild(ratingItem);

                    const urlItem = document.createElement("li");
                    urlItem.textContent = info.url;
                    infoTool.appendChild(urlItem);

                    // Botón favorito
                    const favoriteButton = document.createElement("button");
                    favoriteButton.textContent = "Add Favorite";
                    favoriteButton.id = "favorite";
                    favoriteButton.onclick = async () => {
                        try {
                            const favoriteResponse = await fetch(`/Tools/favorites`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ idtool: tool.idtool })
                            });
                            infoTool.removeChild(favoriteButton);
                            const deleteFavoriteButton = document.createElement("button");
                            deleteFavoriteButton.textContent = "Remove favorite";
                            deleteFavoriteButton.id = "removefavorite";
                            deleteFavoriteButton.onclick = async () => {
                                try {
                                    const deletefavoriteResponse = await fetch(`/Tools/deletefavorite`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    });
                                    infoTool.removeChild(deleteFavoriteButton);
                                    infoTool.appendChild(favoriteButton);
                                } catch (error) {
                                    console.error('Error al eliminar de favoritos:', error);
                                }
                            };
                            infoTool.appendChild(deleteFavoriteButton);

                        } catch (error) {
                            console.error('Error al agregar a favoritos:', error);
                        }
                    };
                    infoTool.appendChild(favoriteButton);

                } catch (error) {
                    console.error('Error al obtener la información de la herramienta:', error);
                }
            }
            toolsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener las herramientas:', error);
    }
}


const express = require('express');
const toolsRouter = express.Router();
const toolsModel = require('./models/Tools2.js');

const validateQueryParams = (req, res, next) => {
    const toolsAttributes = req.body; 
    if (toolsAttributes.idtool) {
        req.toolsAttributes = toolsAttributes;
        return next();
    }
    const error = new Error(`Invalid request body params`); 
    error.status = 400;
    next(error);
};

// Endpoint para filtrar herramientas por nombre
toolsRouter.get('/name', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByName();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

toolsRouter.get('/getfavorites', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByFavorites();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// crear un nuevo favorito
toolsRouter.post('/favorites', validateQueryParams, async (req, res, next) => {
    try {
        const newFavorite = await toolsModel.createFavorite(req.toolsAttributes);
        res.status(201).send(newFavorite);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// crear search
toolsRouter.post('/search', validateQueryParams, async (req, res, next) => {
    try {
        const newSearch = await toolsModel.createSearch(req.toolsAttributes);
        res.status(201).send(newSearch);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por 'id'
toolsRouter.param('/id', async (req, res, next, id) => {
    const tool = await toolsModel.getToolById(id);
    if (tool !== -1) {
        req.tool = tool;
        req.toolId = id;
        return next();
    }
    const error = new Error(`Tool with id ${id} not found`);
    error.status = 404;
    next(error);
});

// getGraphLicense
toolsRouter.get('/graphlicense', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getGraphLicense();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// getGraphContent
toolsRouter.get('/graphcontent', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getGraphContent();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// getGraphEcosystem
toolsRouter.get('/graphecosystem', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getGraphEcosystem();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// getGraphPurpose
toolsRouter.get('/graphpurpose', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getGraphPurpose();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// graphfree
toolsRouter.get('/graphfree', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getGraphFree();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// graphpaid
toolsRouter.get('/graphpaid', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getGraphPaid();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// favorites
toolsRouter.delete('/deletefavorite', async (req, res, next) => {
    const deletedFavorite = await toolsModel.deleteFavorite();
    res.send(deletedFavorite);
});


// Endpoint para filtrar herramientas por 'Proprietary'
toolsRouter.get('/proprietary', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByProprietary();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por 'opensource'
toolsRouter.get('/opensource', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByOpenSource();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Cloud Services
toolsRouter.get('/cloudservices', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByCloudServices();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Foundation Models
toolsRouter.get('/foundationmodels', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByFoundationModels();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Applications
toolsRouter.get('/applications', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByApplications();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Infrastructure
toolsRouter.get('/infrastructure', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByInfrastructure();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Data Integration Services
toolsRouter.get('/dataintegrationservices', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByDataIntegrationServices();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Mashup Models
toolsRouter.get('/mashupmodels', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByMashupModels();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Code
toolsRouter.get('/code', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByCode();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Text
toolsRouter.get('/text', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByText();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Image
toolsRouter.get('/image', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByImage();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Video
toolsRouter.get('/video', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByVideo();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Voice
toolsRouter.get('/voice', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByVoice();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Voice
toolsRouter.get('/musicandsound', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByMusicandSound();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por 3D
toolsRouter.get('/3d', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsBy3D();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por data
toolsRouter.get('/data', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByData();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Simulation
toolsRouter.get('/simulation', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsBySimulation();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Content Generation
toolsRouter.get('/contentgeneration', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByContentGeneration();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Visual Generation
toolsRouter.get('/visualgeneration', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByVisualGeneration();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Speech Generation
toolsRouter.get('/speechgeneration', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsBySpeechGeneration();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Customer Insights
toolsRouter.get('/customerinsights', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByCustomerInsights();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Fraud Detection
toolsRouter.get('/frauddetection', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByFraudDetection();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Investment Strategy
toolsRouter.get('/investmentstrategy', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByInvestmentStrategy();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Forecasting
toolsRouter.get('/forecasting', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByForecasting();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Talent Acquisition
toolsRouter.get('/talentacquisition', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByTalentAcquisition();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Employee Engagement
toolsRouter.get('/employeeengagement', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByEmployeeEngagement();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Performance Management
toolsRouter.get('/performancemanagement', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByPerformanceManagement();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Technical Documentation
toolsRouter.get('/technicaldocumentation', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByTechnicalDocumentation();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Code Writing
toolsRouter.get('/codewriting', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByCodeWriting();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Testing and Debuggin
toolsRouter.get('/testinganddebuggin', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByTestingandDebuggin();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Deployement Automation
toolsRouter.get('/deployementautomation', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByDeployementAutomation();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Visuals Generation
toolsRouter.get('/visualsgeneration', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByVisualsGeneration();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Data Reports
toolsRouter.get('/datareports', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByDataReports();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Procedures Generation
toolsRouter.get('/proceduresgeneration', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByProceduresGeneration();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Customer Support
toolsRouter.get('/customersupport', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByCustomerSupport();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por General Purpose
toolsRouter.get('/generalpurpose', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByGeneralPurpose();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Free Trial
toolsRouter.get('/freetrial', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByFreeTrial();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Free
toolsRouter.get('/free', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByFree();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas por Freemium
toolsRouter.get('/freemium', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByFreemium();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas Subscription Based
toolsRouter.get('/subscriptionbased', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsBySubscriptionBased();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas Token Based
toolsRouter.get('/tokenbased', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByTokenBased();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas OneTimePurchased
toolsRouter.get('/onetimepurchased', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByOneTimePurchased();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar herramientas Paid Multiple
toolsRouter.get('/paidmultiple', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getToolsByPaidMultiple();
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        next(error);
    }
});

// Endpoint para filtrar Info By Tool
toolsRouter.get('/info/:id', async (req, res, next) => {
    try {
        const dbTools = await toolsModel.getInfoByTool(req.params.id);
        res.send(dbTools);
    } catch (e) {
        const error = new Error(`Database error occurred: ${e.message}`);
        error.statusCode = e.statusCode || 500; // Usar el código de estado del error o 500 por defecto
        next(error);
    }
});

module.exports = toolsRouter;


const db = require('../db');

// BY NAME
const getToolsByName = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS");
    return result.rows;
};

// get by favorite
const getToolsByFavorites = async () => {
    const result = await db.query("SELECT idFavorite, idTool FROM favorites");
    return result.rows;
};

const getInfoByTool = async (id) => {
    const count = await db.query('select count(*) from tools where idtool = $1', [id]);
    if (count.rows[0].count === '0') {
        return -1;
    }
    const res = await db.query("SELECT 'Description: ' || COALESCE(t.tooldescription, 'N/A') as tooldescription, 'License: ' || COALESCE(l.license, 'N/A') as license, 'Purpose: ' || COALESCE(g.generativeaiecosystemlayer, 'N/A') as ecosystem, 'Content type: ' || COALESCE(c.contenttype, 'N/A') as contenttype, COALESCE(p.primaryenterprisecategory, 'N/A') || '  ' || COALESCE(o.complimentaryenterprisecategory, 'N/A') as purpose, 'Rating: ' || t.rating, 'URL: ' || t.referenceurl as url FROM tools t left JOIN licensingtype l ON t.licensetype = l.idlicensingtype left JOIN generativeaiecosystemlayer g ON t.generativeaiecosystemlayer = g.idgenerativeaiecosystemlayer left JOIN contenttype c ON t.contenttype = c.idcontenttype left JOIN primaryenterprisecategories p ON t.primaryenterprisecategory = p.idprimaryenterprisecategory left JOIN complimentaryenterprisecategories o ON t.complimentaryenterprisecategory = o.idcomplimentaryenterprisecategory where t.idtool = $1", [id]);
    return res;
};
// grafica license
const getGraphLicense = async () => {
    const result = await db.query("SELECT l.license, COUNT(*) FROM TOOLS t JOIN LicensingType l ON l. idLicensingType = t.LicenseType GROUP BY l.license");
    return result.rows;
};

// grafica content
const getGraphContent = async () => {
    const result = await db.query("SELECT c.ContentType, COUNT(*) FROM TOOLS t JOIN contentType c ON c.idContentType= t.ContentType GROUP BY c.ContentType;");
    return result.rows;
};

// grafica ecosystem
const getGraphEcosystem = async () => {
    const result = await db.query("SELECT e.GenerativeAIEcosystemLayer, COUNT(*) FROM TOOLS t JOIN GenerativeAIEcosystemLayer e ON e.idGenerativeAIEcosystemLayer = t.GenerativeAIEcosystemLayer GROUP BY e.GenerativeAIEcosystemLayer");
    return result.rows;
};

// grafica purpose
const getGraphPurpose = async () => {
    const result = await db.query("SELECT c.ComplimentaryEnterpriseCategory, COUNT(*) FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idcomplimentaryenterprisecategory = t.complimentaryenterprisecategory GROUP BY c.complimentaryenterprisecategory UNION ( SELECT p.primaryenterprisecategory, COUNT(*) FROM TOOLS t JOIN primaryenterprisecategories p ON p.idprimaryenterprisecategory = t.primaryenterprisecategory GROUP BY p.primaryenterprisecategory)");
    return result.rows;
};

// grafica free
const getGraphFree = async () => {
    const result = await db.query("select f.freeversion, count(*) from tools t join freeversion f on f.idfreeversion  = t.freeversion group by f.freeversion ");
    return result.rows;
};

// grafica paid
const getGraphPaid = async () => {
    const result = await db.query("select p.paidversion , count(*) from tools t join paidversion p on p.idpaidversion  = t.paidversion group by p.paidversion");
    return result.rows;
};


//  BY ID
const getToolById = async (id) => {
    const count = await db.query('SELECT COUNT(*) FROM tools WHERE id = $1', [id]);
    if (count.rows[0].count === '0') {
        return -1;
    }
    const result = await db.query('SELECT toolname FROM tools WHERE id = $1', [id]);
    return result.rows[0];
};
// CREATE FAVORITES
const createFavorite = async (favoriteAttributes) => {
    const result = await db.query('INSERT INTO favorites (idtool) VALUES ($1) RETURNING *', [favoriteAttributes.idtool]);
    return result.rows[0];
};                                                                                                              
// DELETE FAVORITES
const deleteFavorite = async () => {
    const result = await db.query('DELETE FROM favorites where idfavorite in (select max(idfavorite) from favorites)');
    return result.rows[0];
};

// CREATE SEARCH
const createSearch = async (searchAttributes) => {
    const result = await db.query('INSERT INTO searchs (idtool) VALUES ($1) RETURNING *', [searchAttributes.idtool]);
    return result.rows[0];
};  

// LICENSE

// FILTRAR POR 'Proprietary'  
const getToolsByProprietary = async () => {
    const result = await db.query("SELECT  t.idTool, t.ToolName FROM TOOLS t JOIN LicensingType l ON l.idlicensingtype  = t.LicenseType WHERE l.license = 'Proprietary'");
    return result.rows;
};

// FILTRAR POR 'Open Source' 
const getToolsByOpenSource = async () => {
    const result = await db.query("SELECT  t.idTool,  t.ToolName FROM TOOLS t JOIN LicensingType l ON l.idlicensingtype  = t.LicenseType WHERE l.license = 'Open Source'");
    return result.rows;
};

// ECOSYSTEM

// FILTRAR POR 'Cloud Services' 
const getToolsByCloudServices = async () => {
    const result = await db.query("SELECT t.idTool, t.ToolName FROM TOOLS t JOIN generativeaiecosystemlayer e ON e.idGenerativeAIEcosystemLayer = t.GenerativeAIEcosystemLayer WHERE e.GenerativeAIEcosystemLayer = 'Cloud Services'");
    return result.rows;
};

// FILTRAR POR 'Foundation Models' *
const getToolsByFoundationModels = async () => {
    const result = await db.query("SELECT  t.idTool, t.ToolName FROM TOOLS t JOIN GenerativeAIEcosystemLayer e ON e.idGenerativeAIEcosystemLayer = t.GenerativeAIEcosystemLayer WHERE e.GenerativeAIEcosystemLayer = 'Foundation Models'");
    return result.rows;
};

// FILTRAR POR 'Applications' *
const getToolsByApplications = async () => {
    const result = await db.query("SELECT  t.idTool, t.ToolName FROM TOOLS t JOIN GenerativeAIEcosystemLayer e ON e.idGenerativeAIEcosystemLayer = t.GenerativeAIEcosystemLayer WHERE e.GenerativeAIEcosystemLayer = 'Applications'");
    return result.rows;
};

// FILTRAR POR 'Infrastructure' *
const getToolsByInfrastructure = async () => {
    const result = await db.query("SELECT  t.idTool, t.ToolName FROM TOOLS t JOIN GenerativeAIEcosystemLayer e ON e.idGenerativeAIEcosystemLayer = t.GenerativeAIEcosystemLayer WHERE e.GenerativeAIEcosystemLayer = 'Infrastructure'");
    return result.rows;
};

// FILTRAR POR 'Data and Integration Services' *
const getToolsByDataIntegrationServices = async () => {
    const result = await db.query("SELECT  t.idTool, t.ToolName FROM TOOLS t JOIN GenerativeAIEcosystemLayer e ON e.idGenerativeAIEcosystemLayer = t.GenerativeAIEcosystemLayer WHERE e.GenerativeAIEcosystemLayer = 'Data and Integration Services'");
    return result.rows;
};

// FILTRAR POR 'Mashup Models' no se si ponerlo porque no tiene *
const getToolsByMashupModels = async () => {
    const result = await db.query("SELECT t.idTool, t.ToolName FROM TOOLS t JOIN GenerativeAIEcosystemLayer e ON e.idGenerativeAIEcosystemLayer = t.GenerativeAIEcosystemLayer WHERE e.GenerativeAIEcosystemLayer = 'Mashup Models'");
    return result.rows;
};

// CONTENT
// FILTRAR POR 'Code'
const getToolsByCode = async () => {
    const result = await db.query("SELECT  t.idTool, idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = 'Code'");
    return result.rows;
};

// FILTRAR POR 'Text'
const getToolsByText = async () => {
    const result = await db.query("SELECT  t.idTool, idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType = t.ContentType WHERE c.ContentType = 'Text'");
    return result.rows;
};

// FILTRAR POR 'Image'
const getToolsByImage = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = 'Image'");
    return result.rows;
};

// FILTRAR POR 'Video'
const getToolsByVideo = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = 'Video'");
    return result.rows;
};

// FILTRAR POR 'Voice'
const getToolsByVoice = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = 'Voice'");
    return result.rows;
};

// FILTRAR POR 'Music and Sound'
const getToolsByMusicandSound = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = 'Music and Sound'");
    return result.rows;
};

// FILTRAR POR '3D'
const getToolsBy3D = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = '3D'");
    return result.rows;
};

// FILTRAR POR 'Data'
const getToolsByData = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = 'Data'");
    return result.rows;
};

// FILTRAR POR 'Simulation'
const getToolsBySimulation = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ContentType c ON c.idContentType= t.ContentType WHERE c.ContentType = 'Simulation'");
    return result.rows;
};

// PURPOSE

// FILTRAR POR 'Marketing - Content Generation'
const getToolsByContentGeneration = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Marketing - Content Generation' OR p.PrimaryEnterpriseCategory = 'Marketing - Content Generation'");
    return result.rows;
};

// FILTRAR POR 'Marketing - Visual Generation'
const getToolsByVisualGeneration = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Marketing - Visual Generation' OR p.PrimaryEnterpriseCategory = 'Marketing - Visual Generation'");
    return result.rows;
};

// FILTRAR POR FILTRAR POR 'Marketing - Speech Generation'
const getToolsBySpeechGeneration = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Marketing - Speech Generation' OR p.PrimaryEnterpriseCategory = 'Marketing - Speech Generation'");
    return result.rows;
};

// FILTRAR POR 'Marketing - Customer Insights'
const getToolsByCustomerInsights = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Marketing - Customer Insights' OR p.PrimaryEnterpriseCategory = 'Marketing - Customer Insights'");
    return result.rows;
};

// FILTRAR POR 'Finance - Fraud Detection'
const getToolsByFraudDetection = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t  JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Finance - Fraud Detection' OR p.PrimaryEnterpriseCategory = 'Finance - Fraud Detection'");
    return result.rows;
};

// FILTRAR POR 'Finance - Investment Strategy'
const getToolsByInvestmentStrategy = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Finance - Investment Strategy' OR p.PrimaryEnterpriseCategory = 'Finance - Investment Strategy'");
    return result.rows;
};

// FILTRAR POR 'Finance - Forecasting'
const getToolsByForecasting = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Finance - Forecasting' OR p.PrimaryEnterpriseCategory = 'Finance - Forecasting'");
    return result.rows;
};

// FILTRAR POR 'People - Talent Acquisition'
const getToolsByTalentAcquisition = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'People - Talent Acquisition' OR p.PrimaryEnterpriseCategory = 'People - Talent Acquisition'");
    return result.rows;
};

// FILTRAR POR 'People - Employee Engagement'
const getToolsByEmployeeEngagement = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'People - Employee Engagement' OR p.PrimaryEnterpriseCategory = 'People - Employee Engagement'");
    return result.rows;
};

// FILTRAR POR 'People - Performance Management'
const getToolsByPerformanceManagement = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'People - Performance Management' OR p.PrimaryEnterpriseCategory = 'People - Performance Management'");
    return result.rows;
};

// FILTRAR POR 'Development - Technical Documentation'
const getToolsByTechnicalDocumentation = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Development - Technical Documentation' OR p.PrimaryEnterpriseCategory = 'Development - Technical Documentation'");
    return result.rows;
};

// FILTRAR POR 'Development - Code Writing'
const getToolsByCodeWriting = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Development - Code Writing' OR p.PrimaryEnterpriseCategory = 'Development - Code Writing'");
    return result.rows;
};

// FILTRAR POR 'Development - Testing and Debuggin'
const getToolsByTestingandDebuggin = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Development - Testing and Debuggin' OR p.PrimaryEnterpriseCategory = 'Development - Testing and Debuggin'");
    return result.rows;
};

// FILTRAR POR 'Development - Deployement Automation'
const getToolsByDeployementAutomation = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Development - Deployement Automation' OR p.PrimaryEnterpriseCategory = 'Development - Deployement Automation'");
    return result.rows;
};

// FILTRAR POR 'Design - Visuals Generation'
const getToolsByVisualsGeneration = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Design - Visuals Generation' OR p.PrimaryEnterpriseCategory = 'Design - Visuals Generation'");
    return result.rows;
};

// FILTRAR POR 'Operations - Data Reports'
const getToolsByDataReports = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Operations - Data Report' OR p.PrimaryEnterpriseCategory = 'Operations - Data Report'");
    return result.rows;
};

// FILTRAR POR 'Operations - Procedures Generation'
const getToolsByProceduresGeneration = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Operations - Procedures Generation' OR p.PrimaryEnterpriseCategory = 'Operations - Procedures Generation'");
    return result.rows;
};

// FILTRAR POR 'Operations - Customer Support'
const getToolsByCustomerSupport = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'Operations - Customer Support' OR p.PrimaryEnterpriseCategory = 'Operations - Customer Support'");
    return result.rows;
};

const getToolsByGeneralPurpose = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN ComplimentaryEnterpriseCategories c ON c.idComplimentaryEnterpriseCategory = t.ComplimentaryEnterpriseCategory JOIN PrimaryEnterpriseCategories p on p.idPrimaryEnterpriseCategory = t.PrimaryEnterpriseCategory WHERE c.ComplimentaryEnterpriseCategory = 'General Purpose' OR p.PrimaryEnterpriseCategory = 'General Purpose'");
    return result.rows;
};

// FILTRAR POR 'Free Trial'
const getToolsByFreeTrial = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN freeversion f ON f.idfreeversion= t.freeversion WHERE f.freeversion = 'Free Trial'");
    return result.rows;
};

// FILTRAR POR 'Free'
const getToolsByFree = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN freeversion f ON f.idfreeversion= t.freeversion WHERE f.freeversion = 'Free'");
    return result.rows;
};

// FILTRAR POR 'Freemium'
const getToolsByFreemium = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN freeversion f ON f.idfreeversion= t.freeversion WHERE f.freeversion = 'Freemium'");
    return result.rows;
};

// FILTRAR POR 'Multiple' 
const getToolsByFreeMultiple = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN freeversion f ON f.idfreeversion= t.freeversion WHERE f.freeversion = 'Multiple'");
    return result.rows;
};

// FILTRAR POR 'Subscription-based'
const getToolsBySubscriptionBased = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN paidversion f ON f.idpaidversion = t.paidversion WHERE f.paidversion = 'Subscription-based'");
    return result.rows;
};

// FILTRAR POR 'Token-based'
const getToolsByTokenBased= async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN paidversion f ON f.idpaidversion = t.paidversion WHERE f.paidversion = 'Token-based'");
    return result.rows;
};

// FILTRAR POR 'One-time purchased'
const getToolsByOneTimePurchased = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN paidversion f ON f.idpaidversion = t.paidversion WHERE f.paidversion = 'One-time purchased'");
    return result.rows;
};

// FILTRAR POR 'Multiple'
const getToolsByPaidMultiple = async () => {
    const result = await db.query("SELECT idTool, ToolName FROM TOOLS t JOIN paidversion f ON f.idpaidversion = t.paidversion WHERE f.paidversion = 'Multiple'");
    return result.rows;
};
                                
(async () => {
    try {
        const testQuery = await db.query('SELECT NOW()');
        console.log('Conexión exitosa a la base de datos:', testQuery.rows[0].now);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
})();

module.exports = {
    getToolsByName,
    getToolsByProprietary,
    getToolsByOpenSource,
    getToolsByCloudServices,
    getToolsByFoundationModels,
    getToolsByApplications,
    getToolsByInfrastructure,
    getToolsByDataIntegrationServices,
    getToolsByMashupModels,
    getToolsByCode,
    getToolsByText,
    getToolsByImage,
    getToolsByVideo,
    getToolsByVoice,
    getToolsByMusicandSound,
    getToolsBy3D,
    getToolsByData,
    getToolsBySimulation,
    getToolsByContentGeneration,
    getToolsByVisualGeneration,
    getToolsBySpeechGeneration,
    getToolsByCustomerInsights,
    getToolsByFraudDetection,
    getToolsByInvestmentStrategy,
    getToolsByForecasting,
    getToolsByTalentAcquisition,
    getToolsByEmployeeEngagement,
    getToolsByPerformanceManagement,
    getToolsByTechnicalDocumentation,
    getToolsByCodeWriting,
    getToolsByTestingandDebuggin,
    getToolsByDeployementAutomation,
    getToolsByVisualsGeneration,
    getToolsByDataReports,
    getToolsByProceduresGeneration,
    getToolsByCustomerSupport,
    getToolsByGeneralPurpose,
    getToolsByFreeTrial,
    getToolsByFree,
    getToolsByFreemium,
    getToolsByFreeMultiple,
    getToolsBySubscriptionBased,
    getToolsByTokenBased,
    getToolsByOneTimePurchased,
    getToolsByPaidMultiple,
    getInfoByTool,
    getToolById,
    createFavorite,
    createSearch,
    getToolsByFavorites,
    deleteFavorite,
    getGraphLicense,
    getGraphContent,
    getGraphEcosystem,
    getGraphPurpose,
    getGraphFree,
    getGraphPaid


};
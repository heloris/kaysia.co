/**
 * Kaysia.co News System Configuration
 * Your actual Google Sheets and N8N configuration
 */

// Your URLs
const KAYSIA_CONFIG = {
  // Your Google Sheets URL
  googleSheetsUrl: 'https://docs.google.com/spreadsheets/d/1H73DmuwWNDWh5rvguU6v3i6nSZFykzpLryTkWuaNB40/edit?usp=sharing',
  googleSheetsId: '1H73DmuwWNDWh5rvguU6v3i6nSZFykzpLryTkWuaNB40',
  
  // Your N8N Workflow URL 
  n8nWorkflowUrl: 'https://kaysigames.app.n8n.cloud/workflow/4Qo6P9QDssxGqDI3',
  
  // N8N Webhook URL (you'll need to create this webhook in your workflow)
  // Replace 'kaysia-news-webhook' with your actual webhook name after creating it
  n8nWebhookUrl: 'https://kaysigames.app.n8n.cloud/webhook/kaysia-news-webhook',
  
  // N8N API endpoints
  n8nApiBase: 'https://kaysigames.app.n8n.cloud',
  
  // Google Sheets actual columns (based on your real data structure)
  expectedColumns: {
    hash: 'id',           // Maps to unique ID
    title: 'title',       // Maps to title
    link: 'link',         // Maps to external link
    date: 'date'          // Maps to date
  },
  
  // Default settings
  refreshInterval: 300000, // 5 minutes
  retryAttempts: 3,
  retryDelay: 2000
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KAYSIA_CONFIG;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
  window.KAYSIA_CONFIG = KAYSIA_CONFIG;
}
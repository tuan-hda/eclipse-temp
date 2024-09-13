const config: any = {
  serverBaseUrl: "https://backend-core-xhub.digital.auto",
  serverVersion: import.meta.env.VITE_SERVER_VERSION || "v2",
  logBaseUrl: import.meta.env.PROD
    ? 'https://logs.digital.auto'
    : 'https://logs.digitalauto.asia',
  cacheBaseUrl:
    import.meta.env.VITE_CACHE_BASE_URL || 'https://cache.digitalauto.tech',
  studioUrl: "https://studio.digital.auto",
  studioBeUrl: "https://bewebstudio.digitalauto.tech",
  widgetMarketPlaceUrl: "https://marketplace.digital.auto/packagetype/widget",
  widgetMarketPlaceBe: "https://store-be.digitalauto.tech",
  uploadFileUrl: "https://upload.digitalauto.tech",
  instanceLogo: "https://www.bosch.com/media/tech/tech_images/favicon-png.png",
  instance: "xhub",
  sso: "bosch",
  defaultModelId: "665826e3194aff003dd2f67b",
  genAI: {
    defaultEndpointUrl: "https://backend-core-xhub.digital.auto/v2/genai",
    marketplaceUrl: "https://store-be.digitalauto.tech/marketplace/genai",
    sdvApp: [
      {
        id: "etas-sdv-genai",
        type: "GenAI_Python",
        name: "ETAS SDV GenAI",
        description: "ETAS GenAI for Python code generation",
        apiKey: "Empty",
        endpointUrl: "https://backend-core-xhub.digital.auto/v2/genai",
        customPayload: (prompt: string) => ({ prompt }),
      },
    ],
    dashboard: [
      {
        id: "etas-dashboard-genai",
        type: "GenAI_Python",
        name: "ETAS Dashboard GenAI",
        description: "ETAS GenAI for Python code generation",
        apiKey: "Empty",
        endpointUrl: "https://backend-core-xhub.digital.auto/v2/genai",
        customPayload: (prompt: string) => ({ prompt }),
      },
    ],
    widget: [],
  },
  github: {
    clientId: 'Ov23livVYo2MXyqoIHox'
  },
  disableEmailLogin: import.meta.env.VITE_DISABLE_EMAIL_LOGIN === 'true',
  strictAuth: true,
};

export default config;
	

const config: any = {
  serverBaseUrl: "https://backend-core-eclipse.digital.auto",
  serverVersion: "v2",
  logBaseUrl: "https://logs.digital.auto",
  cacheBaseUrl: "https://cache.digitalauto.tech",
  studioUrl: "https://studio.digital.auto",
  studioBeUrl: "https://bewebstudio.digitalauto.tech",
  widgetMarketPlaceUrl: "https://marketplace.digital.auto/packagetype/widget",
  widgetMarketPlaceBe: "https://store-be.digitalauto.tech",
  uploadFileUrl: "https://upload.digitalauto.tech",
  instanceLogo: "https://www.bosch.com/media/tech/tech_images/favicon-png.png",
  instance: "eclipse",
  defaultModelId: "665826e3194aff003dd2f67b",
  genAI: {
    wizardCover: "/imgs/default_prototype_cover.jpg",
    hideMarketplace: false,
    defaultEndpointUrl: "https://backend-core-eclipse.digital.auto/v2/genai",
    marketplaceUrl: "https://store-be.digitalauto.tech/marketplace/genai",
    sdvApp: [
      {
        id: "mock-genai",
        type: "GenAI_Python",
        name: "Eclipse SDV GenAI",
        description: "GenAI for Python code generation",
        apiKey: "Empty",
        // endpointUrl: 'https://backend-core-etas.digital.auto/v2/genai/etas',
        customPayload: (prompt: string) => ({ prompt }),
        isMock: true,
      },
    ],
    dashboard: [
      {
        id: "mock-genai",
        type: "GenAI_Dashboard",
        name: "Eclipse Dashboard GenAI",
        description: "GenAI for Dashboard generation",
        apiKey: "Empty",
        // endpointUrl: 'https://backend-core-etas.digital.auto/v2/genai/etas',
        customPayload: (prompt: string) => ({ prompt }),
        isMock: true,
      },
    ],
    widget: [],
  },
  github: {
    clientId: "Ov23livVYo2MXyqoIHox",
  },
  runtime: {
    url: "https://kit.digitalauto.tech",
  },
}

export default config

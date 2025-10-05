self.__BUILD_MANIFEST = {
  "/_error": [
    "./static/chunks/pages/_error.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/healthz",
        "destination": "/api/health"
      },
      {
        "source": "/api/healthz",
        "destination": "/api/health"
      },
      {
        "source": "/health",
        "destination": "/api/health"
      },
      {
        "source": "/ping",
        "destination": "/api/health"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
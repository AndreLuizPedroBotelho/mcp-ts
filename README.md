# mcp-ts

A TypeScript Model Context Protocol (MCP) server implementation that provides tools for retrieving company information from Brazilian registries.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Building](#building)
- [Running](#running)
- [Configuration](#configuration)
- [Available Tools](#available-tools)
- [Development](#development)

## ✨ Features

- **MCP Server**: Fully-featured Model Context Protocol server implementation in TypeScript
- **Company Information Tool**: Retrieve detailed company information using CNPJ
  - Integrated with `minhareceita.org` for real-time data
  - Returns comprehensive company details including registration, partners, and status

## 📦 Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher (bundled with Node.js)

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd mcp-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🔨 Building

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

The compiled files will be available in the `build/` directory.

## ▶️ Running

### Local Execution

Run the server directly:

```bash
node build/server.js
```

The server will initialize and load all available tools.

### MCP Client Integration

To integrate this MCP server with an MCP client (e.g., Claude Desktop), configure it in your MCP settings file (typically `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "mcp-ts": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-ts/build/server.js"]
    }
  }
}
```

**Note**: Replace `/absolute/path/to/mcp-ts/` with the actual absolute path to your project directory.

## ⚙️ Configuration

No additional configuration files are required. The server runs with default settings out of the box.

## 🛠️ Available Tools

### `getInfoCnpj`

Retrieves public company information using the CNPJ (Cadastro Nacional da Pessoa Jurídica).

**Parameters**:

- `cnpj` (string, required): The company's CNPJ. Format is flexible (accepts both `12345678901234` and `12.345.678/0001-34`).

**Output**:
Returns a JSON object containing:

- Company name and legal name
- Business address (street, number, city, state, postal code)
- Registration status and date
- Business type and classification
- Partner information
- Additional registry details

**Example**:

```json
{
  "cnpj": "12.345.678/0001-34",
  "company_name": "Example Company",
  "status": "Active",
  "address": {
    "street": "Avenida Paulista",
    "city": "São Paulo",
    "state": "SP"
  }
}
```

## 📝 Development

### Project Structure

```
mcp-ts/
├── src/
│   ├── server.ts           # Main MCP server entry point
│   └── tools/
│       └── infoCnpj.tool.ts # CNPJ information tool implementation
├── build/                   # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

### Type Safety

This project is built with strict TypeScript configuration for maximum type safety and maintainability.

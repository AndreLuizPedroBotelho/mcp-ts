# mcp-ts

A TypeScript Model Context Protocol (MCP) server implementation.

## Features

- **MCP Server**: Implements the Model Context Protocol for seamless integration.
- **Tools**:
  - `getInfoCnpj`: Retrieves company information from the Brazilian Receita Federal using a CNPJ.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd mcp-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Building

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

## Usage

### Local Execution

You can run the server directly using Node.js:

```bash
node build/server.js
```

### MCP Configuration

To use this server with an MCP client (like Claude Desktop or an IDE extension), add the following configuration to your MCP settings file (e.g., `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "mcp-ts": {
      "command": "node",
      "args": [
        "/absolute/path/to/mcp-ts/build/server.js"
      ]
    }
  }
}
```

Replace `/absolute/path/to/mcp-ts/` with the actual path to your project.

## Available Tools

### `getInfoCnpj`

Retrieves public information about a company using its CNPJ.

- **Input**:
  - `cnpj` (string): The CNPJ of the company (can include punctuation).

- **Output**:
  - Returns a JSON string containing details such as company name, address, status, partners, etc., sourced from `minhareceita.org`.

#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Print commands and their arguments as they are executed.
# set -x # Uncomment for debugging

# Navigate to the application directory if necessary (assuming script is in root)
# cd /app

# Install dependencies if they are not already installed (optional, depending on deployment environment)
# If package-lock.json or yarn.lock exists, prefer ci for faster, more reliable installs
# if [ -f "yarn.lock" ]; then
#  yarn install --frozen-lockfile
# elif [ -f "package-lock.json" ]; then
#  npm ci
# else
#  npm install
# fi

# Build the Next.js application
echo "Building Next.js application..."
# Assuming 'next' is available via npx or in PATH. 
# If you have build scripts in package.json, you might use 'npm run build' or 'yarn build'
npx next build

# Start the Next.js application on port 9000
echo "Starting Next.js application on port 9000..."
# Assuming 'next' is available via npx or in PATH.
# If you have start scripts in package.json, you might use 'npm run start' or 'yarn start' (ensure it respects PORT env or uses -p)
npx next start -p 9000

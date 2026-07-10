# GPU Marketplace

Openx Network offers a **global, decentralized GPU marketplace** that allows developers to **search, compare, and deploy GPU resources efficiently**. Follow these steps to leverage GPU resources in Openx Network Studio.


![Sky Scanner For GPU](/images/openxai-skyscanner-gpu.jpg)

### Access GPU Marketplace

1. Go to [Openx Network Studio](https://studio.openxai.org/) and log in using your **Web3 wallet** (e.g., MetaMask).  
2. Navigate to  

   **App Store → Select Model → Select Version or Host → Explore GPUs → Available Machines**  

   to access the GPU marketplace, where you can browse listed GPU machines or search for additional compute resources using **SkyScanner for Compute & GPUs**.


 ![GPU MarketPlace](/images/openxai-studio-gpumarketplace.jpg)


> **Tip:** You can search GPUs, select one based on requirements, and compare pricing.


### Search & Filter GPUs

The left sidebar lets you refine your search:

- **Search Providers & Servers:** Filter results by provider name or server type.  
- **Price Range:** Adjust the slider (from $1 to $10,000).  
- **Region:** Select a region to minimize latency.  
- **Only Available:** Display only currently available GPUs.

### Selecting a GPU

1. Browse available GPU machines. Example options:

| Provider / Server | Specs | Location | Price |
|------------------|-------|----------|-------|
| Xnode DVM | 8-Core, 16GB RAM, 320 GB Storage, 1 Gbps Networking | - | Free |
| vc2-1c-0.5gb-v6 | 1-Core, 0.5GB RAM, 10 GB Storage | New Jersey, US | ~$2.5/mo |
| vc2-1c-0.5gb | 1-Core, 0.5GB RAM, 10 GB Storage | New Jersey, US | ~$3.5/mo |
| vc2-1c-1gb | 1-Core, 1GB RAM, 25 GB Storage | New Jersey, US | ~$5/mo |
| vhf-1c-1gb | 1-Core, 1GB RAM, 32 GB Storage | New Jersey, US | ~$6/mo |

2. Click **Select** to choose a GPU.  
3. Free servers like **Xnode DVM** are ideal for testing deployments.

### Deploying Your Model

1. After selecting a GPU, go to the **Deployments** section on the dashboard.  
2. Click **Deploy Model** and choose the AI model.  
3. Openx Network Studio handles automatically:

   - **Dependency Installation**: Installs required libraries and drivers.  
   - **Containerization**: Creates isolated Docker containers.  
   - **Storage & Networking**: Attaches persistent storage and high-speed networking.  

4. Your model is deployed with a **dedicated API endpoint** ready for inference within minutes.


### Testing & Monitoring

- Test deployments using free GPU servers.  
- Deployment progress is logged for **dependency installation**, **container setup**, and **storage configuration**.  
- Access your **API endpoint** to run inference directly.


### Monetization & Tokenization

Openx Network allows developers to monetize and tokenize their AI models seamlessly, without intermediaries.

### Access Monetization Settings

Once your model is ready to deploy, during the deployment process, configure the monetization and tokenization options.

![Monetization and Tokenization Options](/images/openxai-studio-tokenization-monetization.jpg)

### Monetization Models

Choose one of the following options:

- **Full Transfer (Sell Entire Model)**  
  Transfer complete ownership of your model, including data, logic, and infrastructure, as a single digital asset.

- **On-Chain SaaS (Subscriptions & Royalties)**  
  Offer your model as a subscription service or usage-based royalty model using smart contracts.

###  Tokenization Options

- Wrap your AI model as an ERC-721 or ERC-6551 token.  
- Allow your model to function as an autonomous economic unit with its own wallet.  
- Define royalty logic (EIP-2981) to automatically pay creators during resale or usage.


### Deploy & Start Earning

1. Upload your model weights or provide an inference URL.  
2. Define pricing logic (flat rate, per token usage, or subscription).  
3. Add optional referral logic and staking tiers.  
4. Click **Deploy**.

Your model will be indexed and available on Openx Network Studio.  
Users can interact and pay using OPENX tokens.  
All usage is tracked on-chain for transparency.


### Seamless Deployment via Openx Network Studio

Deploy your AI models effortlessly using Openx Network Studio. This intuitive interface integrates with our sky-scanner to provision the ideal bare metal server with just a few clicks, providing unmatched performance and scalability.

### Web3 Wallet Access & NixOS Security

- **Web3 Wallet Access:**
  Enhance security with Web3 wallet integration, enabling decentralized authentication for managing deployment credentials and signing transactions. This ensures a trust-minimized approach to access control and streamlines the user experience via blockchain-based identities.

- **NixOS Security:**
  Our XnodeOS is built on a fork of NixOS, employing declarative, immutable configurations that minimize vulnerabilities and safeguard against unauthorized changes. This robust security foundation ensures a reproducible, hardening environment that protects your deployments on bare metal servers.

Experience enhanced performance, secure authentication, and rigorous system security all in one—elevate your AI solution deployments with Openx Network's advanced bare metal infrastructure.




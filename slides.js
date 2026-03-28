const slideData = [
    {
        title: "Executive Summary",
        content: `
            <h3>Project: Autonomous CTI Analysis Engine</h3>
            <p><strong>Overview:</strong> A large-scale engineering initiative to automate the Tier-1 Security Operations Center (SOC) triage process.</p>
            <p><strong>The Scale:</strong> Processed 172,563 fragmented JSON threat intelligence reports into a unified, high-performance master index of 90,013 unique threat actors.</p>
            <ul>
                <li><strong>Strategic Goal:</strong> Reduce Analyst Burnout and Human Error during data consolidation.</li>
                <li><strong>Outcome:</strong> Accelerated time-to-verdict from minutes to milliseconds.</li>
                <li><strong>Technology Stack:</strong> Python, Llama-3 8B (4-bit Quantized), Streamlit, Cloudflare.</li>
            </ul>
        `,
        analogy: "The Automated Library: Instead of searching 172,000 unorganized scrapbooks by hand, we built a digital card catalog that finds the exact criminal file instantly.",
        image: "PPT_PICS/figure_1_1.png"
    },
    {
        title: "The Data Overload Problem",
        content: `
            <h3>Analysis of the 'Data Avalanche'</h3>
            <p>Modern security teams are drowning in raw telemetry. Our research identified a massive systemic bottleneck caused by fragmented data providers.</p>
            <ul>
                <li><strong>Informational Noise:</strong> 90% of raw JSON logs consist of redundant metadata (e.g., 'undetected' scanner status).</li>
                <li><strong>Computational Friction:</strong> Traversing 172k individual files on a standard filesystem introduces critical I/O wait times.</li>
                <li><strong>The Result:</strong> Delayed detection leads to increased 'Dwell Time' for attackers within the network.</li>
            </ul>
        `,
        analogy: "The White Noise Filter: Imagine trying to hear a single whisper in a crowd of 172,000 people. Our system mutes the noise so you only hear the threat.",
        image: "PPT_PICS/figure_2_1 (1).png"
    },
    {
        title: "Heuristic Refinement Strategy",
        content: `
            <h3>Minimal Noise Implementation</h3>
            <p>We developed a deterministic filtration protocol to distill 'Signal' from 'Noise'. This phase is critical for memory optimization on GPU architectures.</p>
            <ul>
                <li><strong>Selective Parsing:</strong> Extracted only high-fidelity keys such as aggregate malicious counts and confidence scores.</li>
                <li><strong>Data Compression:</strong> Reduced the data footprint by 85%, ensuring the entire 90k index fits into active RAM for instant lookup.</li>
                <li><strong>Schema Normalization:</strong> Unified disparate schemas from VirusTotal, AbuseIPDB, and Abuse.ch into a single searchable object.</li>
            </ul>
        `,
        analogy: "Ripping out the Blank Pages: We took those 172,000 notebooks and tore out every blank page and advertisement, leaving only the 'Wanted' posters.",
        image: "PPT_PICS/data_analyst_flow.png"
    },
    {
        title: "Global Telemetry Distribution",
        content: `
            <h3>Intelligence Pillar Distribution</h3>
            <p>Our analysis mapped the distribution of threats across the global intelligence landscape to ensure multi-source validation.</p>
            <ul>
                <li><strong>VirusTotal Density:</strong> Provided the deepest historical heuristic coverage for established malware campaigns.</li>
                <li><strong>AbuseIPDB Frequency:</strong> Acted as the primary indicator for high-frequency spam and reconnaissance activity.</li>
                <li><strong>Cross-Source Confidence:</strong> Indicators flagged by multiple sources demonstrate a 98% lower false-positive rate.</li>
            </ul>
        `,
        analogy: "The Witness Check: If one person says it's raining, you check. If four different global weather stations say it's raining, you grab an umbrella.",
        image: "PPT_PICS/figure_2_2 (1).png"
    },
    {
        title: "Search Performance Benchmarking",
        content: `
            <h3>MTTD (Mean Time to Detect) Reduction</h3>
            <p>By moving from legacy sequential file scanning to an O(1) time-complexity Master Index, we achieved a monumental performance delta.</p>
            <ul>
                <li><strong>Legacy Triage:</strong> 120+ Seconds per IP search (Manual traversal of 172k files).</li>
                <li><strong>CTI Engine:</strong> < 0.001 Seconds (Instant lookup via hash-mapped indexing).</li>
                <li><strong>Efficiency gain:</strong> A 100,000x improvement in the speed of technical data retrieval.</li>
            </ul>
        `,
        analogy: "The Magnetic Haystack: Instead of checking every piece of straw for a needle, we used a powerful magnet to pull the needle out the moment you ask for it.",
        image: "PPT_PICS/figure_5_1 (1).png"
    },
    {
        title: "The Result: AI Analyst Bot",
        content: `
            <h3>Llama-3 Generative Reasoning</h3>
            <p>The final layer of the engine uses Llama-3 8B to act as a Virtual Senior Security Analyst, translating numbers into human strategy.</p>
            <ul>
                <li><strong>In-Context Learning:</strong> Taught the AI to recognize patterns between VirusTotal hits and AbuseIPDB scores.</li>
                <li><strong>Automated IR Reporting:</strong> The system automatically drafts a mitigation verdict (e.g., 'SPAM Detected - Recommend immediate firewall block').</li>
                <li><strong>Accessible Dashboard:</strong> Deployed via secure Cloudflare tunneling for real-time stakeholder visibility.</li>
            </ul>
        `,
        analogy: "The Digital Detective: The AI doesn't just give you a score of 80/100; it reads the evidence and tells you exactly what the crime is and how to stop it.",
        image: "PPT_PICS/figure_4_1.png"
    }
];

let currentIndex = 0;

function updateDisplay() {
    const slide = slideData[currentIndex];
    document.getElementById('slide-title').innerText = slide.title;
    document.getElementById('slide-text').innerHTML = `
        ${slide.content}
        <div class="analogy-footer"><strong>Strategic Analogy:</strong> ${slide.analogy}</div>
    `;
    document.getElementById('slide-image').innerHTML = `
        <img src="${slide.image}" alt="Slide Visualization">
    `;
    document.getElementById('counter').innerText = `MANAGER VIEW | Slide ${currentIndex + 1} of ${slideData.length}`;
    
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === slideData.length - 1;
}

function moveSlide(step) {
    currentIndex += step;
    updateDisplay();
}

// Initialize the presentation
updateDisplay();
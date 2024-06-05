import React from 'react'

const ElectricVehicle = () => {
  return (
    <div className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-8  h-full'>
            <div>
                <p className='text-white text-2xl font-bold'>Electric Vehicle Analysis</p>
                <img className='w-full rounded-md mt-4' src="./electric-car.png" alt="python icon" />
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Background</p>
                <p>The electric vehicle (EV) market is experiencing significant growth globally. This analysis aims to explore and visualize key trends within the EV landscape, leveraging data insights to understand market dynamics and consumer preferences.</p>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Objectives</p>
                <ol className='list-decimal ml-5'>
                    <li><span className='font-semibold'>Market Landscape:</span> Gain a comprehensive understanding of the overall EV market size, encompassing both Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs).</li>
                    <li><span className='font-semibold'>Technological Advancements:</span> Analyze the average electric range of EVs within the dataset, offering insights into the efficiency and range capabilities of current models.</li>
                    <li><span className='font-semibold'>Market Composition:</span> Identify the distribution of BEVs and PHEVs within the market, uncovering the dominance of fully electric models versus plug-in hybrid alternatives.</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Methodology</p>
                <p>This analysis utilizes Tableau, a powerful data visualization tool, to create compelling and informative charts and graphs. The visualizations will explore various aspects of the EV market, including:</p>
                <ul className='list-disc ml-5'>
                    <li><span className='font-semibold'>Line/Area Chart: </span> This chart will depict the total number of EVs over time, starting from 2010, revealing trends in market growth and adoption.</li>
                    <li><span className='font-semibold'>Map Chart:</span>This visualization will showcase the geographical distribution of EVs across different states, highlighting regions with higher concentrations of electric vehicles.</li>
                    <li><span className='font-semibold'>Bar Chart:</span> This chart will identify the top 10 electric vehicle manufacturers based on total vehicle volume, providing insights into brand dominance within the market.</li>
                    <li><span className='font-semibold'>Pie/Donut Chart: </span> This visualization will represent the proportion of EVs eligible for Clean Alternative Fuel Vehicle (CAFV) incentives, offering insights into the program's impact on EV adoption.</li>
                    <li><span className='font-semibold'>Treemap: </span> This visualization will highlight the top 10 electric vehicle models based on total unit volume, uncovering consumer preferences and popular models within the market.</li>
                </ul>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Results</p>
                <p>Here is the final dashboard, you can access it by <a href='https://public.tableau.com/app/profile/muhammad.prudentio.jawairul.falah/viz/EVAnalysis_17161108109370/ElectricVehicleDataAnalysis' className='hover:text-green-500'>click it</a></p>
                <img className='w-full rounded-md mt-4' src="./ev.png" alt="python icon" />
                <p>Unveiling Market Insights</p>
                <ol className='list-decimal ml-5'>
                    <li><strong>Explosive Growth:</strong>  The electric vehicle (EV) market is on a <strong>tear</strong>, with data revealing a <strong>skyrocketing</strong> trend in total EVs year-over-year.</li>
                    <li><strong>Tesla Tops the Charts:</strong>  No brand reigns supreme like Tesla.  They claim a whopping 70% market share in the US, solidifying their position as the undisputed <strong>king of the EV hill.</strong></li>
                    <li><strong>Model Y Steals the Show: </strong> Among Tesla's offerings, the Model Y emerges as the <strong>undisputed champion</strong>, captivating American drivers and leading the sales race.</li>
                    <li><strong>A Tale of Two Coasts: </strong> The EV revolution isn't uniform across the US.  Our analysis exposes a <strong>glaring disparity</strong>, with Washington boasting significantly higher EV adoption compared to the rest of the country.</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Recommendations </p>
                <div>
                    <p className='font-semibold'>For established car manufacturers not currently in the EV market</p>
                    <ol className='list-decimal ml-5'>
                        <li><strong>Develop a Competitive EV Model Lineup:</strong> Prioritize the development and launch of compelling electric vehicles that can compete with established players like Tesla. Focus on offering a range of options to cater to various consumer needs and budgets</li>
                        <li><strong>Strategic Partnerships: </strong> Forge partnerships with battery technology companies or existing EV manufacturers to accelerate your entry into the market and leverage their expertise.</li>
                        <li><strong>Invest in Charging Infrastructure: </strong> Collaborate with government or private entities to invest in building a robust charging infrastructure across the country. This will alleviate range anxiety for potential EV buyers and incentivize them to choose your brand.</li>
                    </ol>
                </div>
                <div className=' mt-5'>
                    <p className='font-semibold'>For established car manufacturers with a limited EV presence</p>
                    <ol className='list-decimal ml-5'>
                        <li><strong>Expand EV Portfolio:</strong> The skyrocketing EV market presents a significant opportunity. Consider broadening your electric vehicle offerings beyond current models to cater to a wider range of consumer preferences and price points.</li>
                        <li><strong>Target Model Y Competitors: </strong>The Model Y's dominance highlights a gap in the market.  Invest in research and development to create compelling electric vehicle alternatives that compete directly with the Model Y in terms of features, performance, or price.</li>
                        <li><strong>Focus on Regional Expansion: </strong>The significant EV adoption disparity in Washington presents a strategic opportunity.  Allocate resources towards marketing and dealership expansion efforts in regions with lower EV penetration to drive national market share growth.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ElectricVehicle
import React from 'react'

const SEM = () => {
  return (
    <div className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-8  h-full'>
            <div>
                <p className='text-[#24a042] text-4xl font-bold'>Search Engine Marketing</p>
                <img className='w-full h-[440px] rounded-md mt-4' src="./sem-hero.jpeg" alt="python icon" />
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Background</p>
                <p className='text-justify'>In today's competitive digital landscape, effective paid marketing is crucial for businesses to drive traffic, generate leads, and ultimately achieve their marketing goals. Without a centralized hub for data visualization and analysis, it becomes challenging to gain a holistic understanding of campaign performance and identify areas for improvement. That's where this comprehensive Paid Marketing Dashboard comes in.</p>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Objectives</p>
                <span className='font-semibold'>Campaign Performance Evaluation:   </span> The dashboard is designed to provide a comprehensive overview of campaign performance across various metrics such as leads, clicks, cost, and conversion rates. Its goal is to help stakeholders assess the effectiveness of different campaigns and channels
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Data Preparation</p>
                <div>
                    <div>
                        <p className='text-lg font-semibold'>1. Check Column Name</p>
                        <p>There is a column where the name is still uncorrect. Therefore I change the name of it</p>
                        <img className='h-[440px] rounded-md mt-4' src="/sem-check-1.png" alt="python icon" />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>2. Check Missing Values & Type of data</p>
                        <p>By using pandas's .info() function it could be seen that there is no null / missing values from all the rows as well as the type of data from each column is already correct</p>
                        <img className='h-[340px] rounded-md mt-4' src="/sem-check-2.png" alt="python icon" />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>3. Replace Wrong Values</p>
                        <p>If we deep dive the values inTO each column, the Campaign Name & Channel column have some mispell values. Therefore it needs to be addressed.</p>
                        <img className='h-[740px] rounded-md mt-4' src="/sem-check-3T.png" alt="python icon" />
                    </div>
                </div>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Results</p>
                <iframe title="SEM" className='w-full h-[600px]' src="https://app.powerbi.com/view?r=eyJrIjoiMTcxZTM0ODQtY2FhNy00YmNhLTg1MjgtMTBkMzhlNGM5YWQxIiwidCI6IjM0ODViOTYzLTgyYmEtNGE2Zi04MTBmLWI1Y2MyMjZmZjg5OCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                <p className='mt-5 text-lg font-semibold'>Key Findings</p>
                <p className='text-white'>Here are some key findings for the period of February 2024 compared to January 2024</p>
                <p className='mt-5 text-lg font-semibold'>Main Page</p>
                <div>
                    <p className='text-lg font-semibold'>1. Overall Performance</p>
                    <ul className='list-disc ml-5'>
                        <li>The campaign has reached a significant number of impressions (64.8M), but the click-through rate (CTR) is extremely low (0.0%). This suggests a potential issue with ad relevance or targeting.</li>
                        <li>While the conversion rate (CR) for sessions to leads is 1.0, which is technically 100%, it's crucial to consider the overall volume of sessions and leads to assess the actual effectiveness.</li>
                        <li>The cost per lead (CPL) is relatively high at 290.9K, indicating a potential inefficiency in lead generation</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>2. Performance vs. Target</p>
                    <ul className='list-disc ml-5'>
                        <li>The campaign is significantly underperforming against all targets: impressions, clicks, sessions, and leads.</li>
                        <li>There's a 5% decrease in impressions compared to the previous period, which could be due to changes in ad delivery or competition.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>3. Cost Metrix</p>
                    <ul className='list-disc ml-5'>
                        <li>The cost per mille (CPM) is relatively high at 819.6K, suggesting that the campaign is paying a premium to reach its target audience.</li>
                        <li>The cost per click (CPC) is also high at 16.7K, indicating that the ads are not resonating well with the audience.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>4. Channel Performance</p>
                    <ul className='list-disc ml-5'>
                        <li>Google:Leads and CPL show fluctuations but remain relatively stable.</li>
                        <li>Meta: Leads and CPL exhibit similar patterns to Google.</li>
                        <li>Tiktok: While data points are limited, TikTok shows potential for lead generation with a relatively low CPL.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>5. Time Analysis</p>
                    <ul className='list-disc ml-5'>
                        <li>Weekday Peaks: It appears that weekdays (Monday to Friday) generally have higher lead volumes compared to weekends.</li>
                        <li>Hourly Variations: There are significant fluctuations in lead volume throughout the day.</li>
                    </ul>
                </div>
                <p className='mt-5 text-lg font-semibold text-white'>Detail Campaign Page</p>
                <div className='text-white'>
                    <p className='text-lg font-semibold'>1. Overall Performance</p>
                    <ul className='list-disc ml-5'>
                        <li>High Click-Through Rates: Most campaigns have high click-through rates (indicated by the high click values and relatively low CPC).</li>
                        <li>Consistent CPL: The CPL across campaigns is relatively stable, indicating consistent lead acquisition costs.</li>
                        <li>Varying CPM: There's a range of CPM values, suggesting differences in ad placement and auction dynamics.</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <p className='text-lg font-semibold'>2. Campaign Performance</p>
                    <ul className='list-disc ml-5'>
                        <li>Back to School and Clearance Event have the highest click volumes and relatively low CPL, indicating strong performance.</li>
                        <li>Discount Week and Summer Sale have high click volumes but slightly higher CPL, suggesting potential areas for optimization.</li>
                    </ul>
                </div>
            </div>
            
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Recommendations</p>
                <p className='mt-5 text-lg font-semibold text-white'> Main Page</p>
                <div>
                    <ul className='list-disc ml-5'>
                        <li>Improve Ad Relevance and Targeting: Analyze ad copy, targeting options, and audience segmentation to enhance ad relevance and increase CTR. Consider A/B testing different ad variations to identify the most effective approach.</li>
                        <li>Optimize Landing Page Experience: Ensure the landing page is user-friendly, relevant to the ad, and has a clear call to action. A poor landing page experience can lead to high bounce rates and low conversion rates.</li>
                        <li>Review Bidding Strategy: Evaluate the current bidding strategy to identify potential optimization opportunities. Consider adjusting bids based on performance data to improve efficiency.</li>
                        <li>Audience Segmentation: Refine audience targeting to focus on high-value segments and optimize ad delivery accordingly</li>
                        <li>Channel Allocation: Evaluate the return on investment (ROI) for each channel and consider reallocating budget to channels with higher performance.</li>
                        <li>Focus on Peak Days and Hours: Allocate more marketing resources and campaigns to days and times with higher lead volumes.</li>
                        <li>Analyze Low-Performing Periods: Identify reasons for lower lead generation during specific times and implement strategies to improve performance.</li>
                    </ul>
                </div>
                <p className='mt-5 text-lg font-semibold text-white'>Detail Campaign Page</p>
                <div>
                    <ul className='list-disc ml-5'>
                        <li>Build on Success: Allocate more budget to top-performing campaigns like "Back to School" and "Clearance Event."</li>
                        <li>Optimize Underperforming Campaigns: Analyze campaigns with higher CPL to identify areas for improvement, such as ad copy, targeting, or bidding strategies.</li>
                        <li>A/B Testing: Conduct A/B tests on different ad creatives, targeting options, and bidding strategies to optimize performance.</li>
                        <li>CPC Optimization: Focus on reducing CPC by refining targeting, improving ad relevance, and bidding strategies.</li>
                        <li>CPM Analysis: Investigate the reasons for varying CPM across campaigns and explore opportunities to optimize ad placements.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SEM 
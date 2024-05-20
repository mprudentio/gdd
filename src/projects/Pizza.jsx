import React from 'react'

const ElectricVehicle = () => {
  return (
    <div className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-8  h-full'>
            <div>
                <p className='text-white text-2xl font-bold'>Pizza Sales</p>
                <img className='w-full h-[440px] rounded-md mt-4' src="./pizza.jpg" alt="python icon" />
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Background</p>
                <p>In the competitive world of pizza, understanding customer preferences and sales trends is crucial for success. This analysis delves into key metrics associated with our pizza sales data, offering valuable insights to optimize our business strategy</p>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Objectives</p>
                <ol className='list-decimal ml-5'>
                    <li><span className='font-semibold'>Measure Performance:  </span>Calculating essential metrics such as total revenue, average order value, and pizza quantities sold, providing a comprehensive picture of our sales performance.</li>
                    <li><span className='font-semibold'>Identify Trends:</span> By visualizing daily and monthly order trends, we aim to uncover patterns and peak sales periods to inform strategic decision-making.</li>
                    <li><span className='font-semibold'>Understand Preferences: </span> Analyzing pizza category and size distribution will shed light on customer preferences, allowing us to cater to their evolving tastes.</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Methodology</p>
                <p>This analysis utilizes Power BI, a powerful data visualization tool, to create compelling and informative charts and graphs. The visualizations will explore various aspects of the EV market, including:</p>
                <ul className='list-disc ml-5'>
                    <li><span className='font-semibold'>Daily & Monthly Order Trends: </span> Bar and line charts will reveal daily and hourly order fluctuations, enabling us to identify peak sales periods and optimize staffing or promotions accordingly.</li>
                    <li><span className='font-semibold'>Pizza Category & Size Popularity: </span>Pie charts will showcase the percentage contribution of different pizza categories and sizes to overall sales, guiding menu development and marketing strategies.</li>
                    <li><span className='font-semibold'>Sales & Quantity Funnels: </span>  Funnel charts will depict the total pizzas sold within each pizza category, providing insights into the sales performance of various options.</li>
                    <li><span className='font-semibold'>Top & Bottom Sellers: </span> Bar charts will highlight the top and bottom 5 best-selling pizzas based on revenue, quantity, and order frequency, allowing us to identify customer favorites and areas for improvement.</li>
                </ul>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Results</p>
                <iframe title="pizza_dashboard" className='w-full h-[600px]' src="https://app.powerbi.com/view?r=eyJrIjoiYTg3YTNmZjEtZTRlNS00NTI0LWE3NDYtODE2YzRmYmQ4YjllIiwidCI6IjM0ODViOTYzLTgyYmEtNGE2Zi04MTBmLWI1Y2MyMjZmZjg5OCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                <p className='mt-5'>Unveiling Customer Cravings</p>
                <ol className='list-decimal ml-5'>
                    <li><strong>Weekend Warriors: </strong>   Our data reveals a pizza party on weekends!  Order volumes spike on Friday and Saturday evenings, highlighting the popularity of pizza as a weekend indulgence.</li>
                    <li><strong>Summer Sizzle & New Year's Nibbles:</strong> Get ready to crank up the ovens!  July and January emerge as the champions of pizza consumption, likely fueled by summer gatherings and post-holiday celebrations.</li>
                    <li><strong>Classic Reigns Supreme: </strong> There's a reason classics never go out of style.  The iconic Classic category dominates sales and order volume, proving that sometimes, the simplest options are the winners.</li>
                    <li><strong>Large and in Charge: </strong> Customers go big on flavor!  Large pizzas reign supreme, suggesting a preference for sharing or satisfying heartier appetites.</li>
                </ol>
                <p className='mt-5'>Top Sellers Revealed</p>
                <ol className='list-decimal ml-5'>
                    <li><strong>Revenue Royalty:   </strong>   The king of the crust is crowned!  The Thai Chicken pizza takes the top spot in revenue generation, indicating its irresistible combination of flavor and value.</li>
                    <li><strong>Quantity Champs:</strong> Classic Deluxe pizza reigns supreme in terms of total quantity sold, proving it's a crowd-pleaser that keeps customers coming back for more.</li>
                    <li><strong>Order All-Stars:   </strong> Classic Deluxe pizza doubles down on its success, topping the charts for total orders.  This pizza is clearly a customer favorite.</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Room for Improvement</p>
                <ul className='list-disc ml-5'>
                    <li><span className='font-semibold'>Revenue Runners-Up: </span> Spinach Pesto pizza finds itself at the bottom of the revenue list.  This could indicate a need for repricing or exploring alternative ingredient combinations to boost its appeal.</li>
                    <li><span className='font-semibold'>Quantity also Matters:   </span>Soppressata pizza falls short in terms of total quantity sold.  Investigating customer feedback or exploring promotional strategies could help it gain traction.</li>
                    <li><span className='font-semibold'>Total Order Tweaks:   </span> Chicken Pesto pizza falls flat in total order volume.  Analyzing its placement on menus or considering special offers could help it climb the ranks.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ElectricVehicle
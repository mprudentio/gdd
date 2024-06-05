import React from 'react'

const ABTest = () => {
  return (
    <div className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-8  h-full'>
            <div>
                <p className='text-[#24a042] text-4xl font-bold'>A/B Testing</p>
                <img className='w-full h-[440px] rounded-md mt-4' src="./abtestinghero.jpg" alt="python icon" />
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Background</p>
                <p className='text-justify'>In today's data-driven world, making informed decisions about website features and marketing campaigns is crucial. A/B testing empowers us to do just that. By comparing two variations (control and test groups) of a website element or marketing message, we can identify which version performs better in terms of user engagement or conversion rates. This data-backed approach allows us to continuously optimize our offerings and deliver the most impactful experiences for our audience.</p>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Objectives</p>
                <ol className='list-decimal ml-5'>
                    <li><span className='font-semibold'>Identify the Optimal Version:  </span> Gain a comprehensive understanding of the demographics and characteristics of the working population surveyed.</li>
                    <li><span className='font-semibold'>Uncover Statistical Significance:  </span> Evaluate the effectiveness of existing mental health support systems offered by workplaces.</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Method & Results</p>
                <p>You can see the whole method & results by <a href='https://colab.research.google.com/drive/1Mwx0eRzxun2U370lpGZBal9vwja-WY7S?usp=sharing' rel="noreferrer" className='hover:text-green-500' target="_blank">clicking it</a></p>
            </div>
        </div>
    </div>
  )
}

export default ABTest
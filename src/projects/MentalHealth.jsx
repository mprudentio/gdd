import React from 'react'

const MentalHealth = () => {
  return (
    <div className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-8  h-full'>
            <div>
                <p className='text-[#24a042] text-4xl font-bold'>Mental Health</p>
                <img className='w-full h-[440px] rounded-md mt-4' src="./kesehatan-mental.jpg" alt="python icon" />
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Background</p>
                <p className='text-justify'>The relentless pace of the modern world has intensified the focus on mental health, particularly among working adults.  Mental health concerns are rising globally, impacting not only individuals but also overall economic productivity.  Analyzing mental health data from working populations around the world is no longer a luxury, but a vital tool.  By gaining insights into the experiences of this vast demographic, we can address critical issues, develop data-driven solutions to support well-being, and ultimately build a more resilient global workforce.  Investing in the mental health of working adults isn't just a social responsibility, it's an investment in a thriving and productive future.</p>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Objectives</p>
                <ol className='list-decimal ml-5'>
                    <li><span className='font-semibold'>Respondent Characteristics:  </span> Gain a comprehensive understanding of the demographics and characteristics of the working population surveyed.</li>
                    <li><span className='font-semibold'>Workplace Mental Health Support:   </span> Evaluate the effectiveness of existing mental health support systems offered by workplaces.</li>
                    <li><span className='font-semibold'>Mental Health Impact on Work and Social Life:</span> Assess the relationship between reported mental health conditions and their impact on the work and social lives of respondents</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Methodology</p>
                <div>
                    <p className='text-lg font-semibold'>A. Data Cleaning</p>
                    <div>
                        <p className='text-lg font-semibold'>1. Check Missing Values</p>
                        <p>I utilized the COUNTBLANK() function to verify the presence of any blank values across each column. The results indicated that there Ire no missing or blank values in any of the columns.</p>
                        <img className='w-full h-[240px] rounded-md mt-4' src="/blank.png" alt="python icon" />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>2. Addressing Outlier Values</p>
                        <p>In the Age column, I identified outlier values, such as -1726 and 329. To address these, I calculated the Interquartile Range (IQR) to pinpoint the outliers. Subsequently, I calculated the median of the non-outlier values and replaced the outliers with this median value.</p>
                        <img className='w-full h-[440px] rounded-md mt-4' src="/age_column.png" alt="python icon" />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>3. Creating Age Class Classification</p>
                        <p>I determined the number of classes and calculated the interval for each class to create a classification system for age.</p>
                        <img className='w-full h-[440px] rounded-md mt-4' src="/age_classification.png" alt="python icon" />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>4. Fix Gender Column</p>
                        <p>The Gender column contained inconsistent values such as "male" and "Male." I applied the PROPER() and TRIM() functions to standardize the entries, categorizing them into three gender identities: Male, Female, and Queer.</p>
                        <img className='w-full h-[440px] rounded-md mt-4' src="/gender_column.png" alt="python icon" />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>5. Fix Number of Employees</p>
                        <p>The "number of employees" field was incorrectly formatted as a date. I corrected this by converting the data type to a numerical format.</p>
                        <img className='w-full h-[440px] rounded-md mt-4' src="/no_employees_column.png" alt="python icon" />
                    </div>
                </div>
                <div>
                    <p className='text-lg font-semibold mt-4'>B. Visualizations</p>
                    <ol className='list-decimal ml-5'>
                        <li><span className='font-semibold'>Map:  </span> A map visualizes the geographical distribution of respondents.</li>
                        <li><span className='font-semibold'>Pie Chart:   </span> Pie charts depict various aspects including:Respondents by Workplace Illness Programs, Who People Discuss Mental Health With, Mental Health's Influence on Weight Changes, Mental Health's Influence on Social Interaction</li>
                        <li><span className='font-semibold'>Bar Chart:</span> Bar charts illustrate:Number of Respondents by Age, Mental Health's Impact on Work Productivity, Number of Respondents by Number of Employees They Work With, People Seeking Mental Health Treatment by Gender Identity</li>
                        <li><span className='font-semibold'>100% Stacked Bar:</span> This visualization shows: People Seeking Mental Health Treatment by Gender Identity, Difficulty Getting Leave by Gender Identity</li>
                    </ol>
                </div>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Results</p>
                <p>You can see the pdf version of the dashboard by <a href='https://drive.google.com/file/d/13UOVy9K7-VoqXQE1HlUrFJdoEGcypfg4/view?usp=sharing' rel="noreferrer" className='hover:text-green-500' target="_blank">clicking it</a></p>
                <img className='w-full h-[440px] rounded-md mt-4' src="/mentalhealthgif.gif" alt="python icon" />
                <p className='mt-5 text-lg font-semibold'>Key Findings</p>
                <div>
                    <p className='text-lg font-semibold'>1. Demographics</p>
                    <p>The majority of respondents reside in the United States, with a significant representation across various factors like work location (remote/office) and industry (tech and others). The data reveals a concentration within the 30-35 age range regardless of these factors. Company size also appears diverse, with both large and small companies represented.</p>
                </div>
                <div>
                    <p className='text-lg font-semibold'>2. Mental Health Support and Stigma</p>
                    <p>An interesting trend emerged - male respondents were less likely to seek professional help for mental health concerns compared to females and those identifying as queer. This finding suggests a potential need for targeted outreach and support programs to address potential stigma surrounding mental health in specific demographics.</p>
                </div>
                <div>
                    <p className='text-lg font-semibold'>3. Workplace Support and Communication</p>
                    <ul className='list-disc ml-5'>
                        <li>The data shows that a significant portion of respondents lack access to a formal wellness program within their workplace. This highlights the importance of advocating for mental health awareness and promoting the implementation of comprehensive wellness initiatives within companies.</li>
                        <li>Interestingly, the preferred method of communication for mental health concerns appears to be a combination of supervisors and coworkers. This suggests a desire for both formal support from leadership and informal peer-to-peer support within the workplace.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>4. Impact on Work and Social Life</p>
                    <ul className='list-disc ml-5'>
                        <li>A noteworthy finding is that most respondents reported experiencing some level of work disruption due to their mental health condition. This underscores the significant impact mental health can have on productivity and overall well-being.</li>
                        <li>The data also reveals a connection between mental health and lifestyle factors. A large proportion of respondents indicated that their mental health influences weight changes and social interactions. This highlights the interconnectedness of mental and physical health.</li>
                    </ul>
                </div>
            </div>
            <div className='text-white mt-5'>
                <p className='text-xl  font-bold text-[#24A042]'>Recommendations</p>
                <div>
                    <p className='text-lg font-semibold'>1. Expand Outreach and Support for Men's Mental Health</p>
                    <ul className='list-disc ml-5'>
                        <li>Implement awareness campaigns specifically focused on male employees, normalizing seeking mental health help and highlighting available resources.</li>
                        <li>Consider establishing employee resource groups (ERGs) for men to foster a supportive environment and open dialogue about mental health.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>2. Prioritize Workplace Wellness Programs</p>
                    <ul className='list-disc ml-5'>
                        <li>Advocate for the creation or expansion of comprehensive wellness programs that offer resources and support for mental health.</li>
                        <li>Partner with mental health professionals to offer on-site workshops and educational sessions for employees.</li>
                        <li>Promote existing Employee Assistance Programs (EAPs) and ensure clear communication about access and utilization.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>3. Encourage Open Communication Channels</p>
                    <ul className='list-disc ml-5'>
                        <li>Train managers and supervisors to create a safe and supportive environment where employees feel comfortable discussing mental health concerns.</li>
                        <li>Develop clear guidelines for employee leave policies related to mental health needs.</li>
                        <li>Encourage peer-to-peer support by fostering a culture of empathy and understanding within teams.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>4.  Address the Impact on Work and Social Life</p>
                    <ul className='list-disc ml-5'>
                        <li>Implement flexible work arrangements and promote healthy work-life balance practices to minimize work-related stress impacting mental health.</li>
                        <li>Develop programs that promote healthy lifestyle choices, including stress management techniques and resources for physical activity.</li>
                        <li>Encourage open communication about mental health's influence on social interactions to foster supportive networks among colleagues.</li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold'>5.  Continuous Monitoring and Evaluation</p>
                    <ul className='list-disc ml-5'>
                        <li>Regularly analyze data and monitor trends related to mental health within the workforce.</li>
                        <li>Conduct periodic surveys to assess the effectiveness of implemented initiatives.</li>
                        <li>Remain data-driven and adapt strategies based on evolving needs and feedback from the employee population.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MentalHealth
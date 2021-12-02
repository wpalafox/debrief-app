import logo from './logo.svg';
import './App.css';
import ContactUs from './ContactUs.jsx';
import { Link } from "react-router-dom";
import Navigation from './Navigation.jsx';



function App() {
  return (
    <div className="App">
     
      <Navigation />
      <div className="Educational">
            <h1>Educational Debriefing </h1> 

          <p>Sometimes in research it is necessary not to tell the participants the hypothesis. 
            We can’t always tell people about the purpose of the experiment because it might affect 
            our results. </p>
            
            <p>If we tell people the purpose of the experiment or how we predict people will 
            act in the experiment, they may deliberately do whatever it is they think we want them to do, 
            just to help us out and give us the results that they think we want. </p>
            
            <p> Or, it is also possible that the opposite might occur. That is, if we tell people our predictions; they might 
            deliberately act in the opposite direction to show us that we can’t figure them out. </p>

            <p> Either way, we would not have a very good indication of how they would act in a situation in 
            everyday life. </p>

            <h2>The Purpose of this Study: </h2> 

            <p>What we are most interested in is whether educational materials can prevent phishing 
              victimization. We predict that those who are educated about phishing and 
              identity theft prevention will be less likely to click on suspicious links. </p>

            <p>For the Control Condition: For this project, 
                you were in the control condition if you did not 
                receive educational materials. </p>
            
            <p>For the Experimental Condition: For this project, 
                  you were in the experimental condition if you did 
                  receive educational materials. </p>

            <p>Both groups then received manufactured suspicious 
              links and we tracked who clicked on those links to ascertain 
              whether those who received the educational materials were less 
              likely to click the link. </p>
            
              <p>Both groups then received manufactured suspicious 
              links and we tracked who clicked on those links to ascertain 
              whether those who received the educational materials were less 
              likely to click the link. </p>

           

            



     

          <p>
            <b> If you have any questions, you may direct them to the principal investigator: </b>
              </p>


              <p>
              Dr. Caitlyn Muniz | cnmuniz@utep.edu |
              (915) 747-8761


              </p>


              <p> <b>If you feel any discomfort, or would like to access the educational materials or victim resources, 
                you can find them here: </b> </p> 

                <ul>
                    <li><a href="https://ebcs.gsu.edu/project/identify-theft-victims/">Identity Theft Prevention</a></li>
                    <li><a href="https://www.idtheftcenter.org">ID Theft Center</a></li>
                    <li><a href="https://www.ic3.gov">Internet Crime Complaint Center IC3</a></li>
                    <li><a href="https://www.equifax.com/personal/credit-report-services/credit-freeze/">EQUIFAX</a></li>
                    <li><a href="https://ovc.ojp.gov/help-for-victims/help-in-your-state">Office for Victims of Crime</a></li>
                    <li><a href="https://www.justice.gov/actioncenter/find-help-and-information-crime-victims">The United States Department of Justice</a></li>
                    <li><a href="https://www.rainn.org/">RAINN</a></li>
                </ul>
       </div>
    </div>
  );
}

export default App;



import './App.css'
import Imegs from '../public/شعار_أكاديمية_طويق-removebg-preview copy.png'
import Course from './compent/course'

function App() {


  return (
    <>
   
    <nav>
    
    <ul>
  <li><a href="#">الرئيسيه</a></li>
  <li><a href="#">حول الاكاديميه</a></li>
  <li><a href="#">المعسكرات والبرامج</a></li>
  <li><a href="#">اخبار الاكاديميه</a></li>
</ul>
      
  </nav>
  
  <section>
    <quote>
    <Course name="JavaScript" date='2023-06-01'></Course>
      <br/>
   <button>تفاصيل الدوره</button>
    </quote>
    <quote>
     <Course name="Java" date='2023-06-05'></Course>
      <br/>
      <button>تفاصيل الدوره</button>
    </quote>
   
    <quote>
    <Course name=".Net" date='2023-05-07'></Course>
      <br/>
      <button>تفاصيل الدوره</button>
    </quote>
  </section>
  <footer> <p>Contact us</p>
  <p><a href="mailto:hege@example.com">TuwaiqAcademy@edu.sa</a></p></footer>


  

  
  
   
            

    </>
  )
}

export default App

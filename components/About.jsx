import htmlIcon from './imgs/html.png';  // Example paths
import cssIcon from './imgs/css.png';
import jsIcon from './imgs/js.png';
import javaIcon from './imgs/java.png';
import pythonIcon from './imgs/python.png';
import phpIcon from './imgs/php.png';
import ReactIcon from './imgs/react.png';
import ProfileImg from './imgs/ProfileImg.png';
import './About.css';



const About = () => {
  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'Python', icon: pythonIcon},
    { name: 'Php', icon: phpIcon},
    { name: 'React', icon: ReactIcon}
  ];

  return (
    <div id="about" className="body-container">
      {/* Description */}
      <section>
        <img src={ProfileImg} alt="Logo" className="logo-img" />
        <h2>About Me</h2>
        <p>Hi, I'm Mvelo! A passionate computer science student who is constantly exploring new opportunities to grow myself in. <br/>
            I am currently doing my second year student in the University of KwaZulu-natal. </p>
      </section>

      {/* Achievements */}
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>partially full-stack development bootcamp</li>
          <li>Built few web applications</li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <img src={skill.icon} alt={`${skill.name} icon`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="curriculum">
        <h2>My Curriculum at the University of KwaZulu-Natal</h2>
        <h1>First year - 2024</h1>
        <ul>
          
          <li>Introduction to computer science - COMP100
            <ul>
              <li>
              Overview of computer science. Basic computer literacy. Problem solving and algorithm design.<br/>
              Simplemachine architecture.Simple programming in a high level programming language. <br/>Program debugging and testing.
              </li>
            </ul> 
          </li>
          <li>Introduction to Calculus - MATH130 
            <ul>
                <li>
                Fundamental Concepts- elementary logic, proof techniques. Differential Calculus- Functions, graphs<br/> andinverse functions, 
                limits and continuity, the derivative, techniques of differentiation, <br/>applications of derivatives,antiderivatives.
                </li>
              </ul> 
          </li>
          <li>Introduction to Statistics
          <ul>
                <li>
                Descriptive statistical methods. Measures of central tendency and dispersion. Permutations andCombinations.<br/>
                Basic probability concepts. Discrete random variables and their properties: Bernoulli, Binomial, Poisson,Hypergeometric.<br/>
                Normal distributions. Point and interval estimation. Correlation and<br/> simple linear regression.Hypothesis tests for proportions, meansand variances. Reporting on the output of <br/>
                appropriate statistical computingpackages.Practicals: Excel-based exercises and practicals on the above topics
                </li>
              </ul> 
          </li>
          <li>Manangement 120
            <ul>
                  <li>
                    The module covers the following topics: Introduction and what is management; The management <br/>
                    process today; Values, Attitudes, Emotions and Culture; Managing in the Global Environment; Values, Attitudes, <br/>
                    Emotions and Culture: The Manager as a Person; Managing Diverse Employees in a Multicultural Environment; <br/>
                    Managing in the Global Environment; Decision making and Entrepreneurship; Planning and Competition; Designing <br/>
                    Organisational Structure; Control and Change; Motivation; Leadership; Effective Team Management; Governance; <br/>
                    Writing Skills.
                  </li>
                </ul> 
          </li>
          <li>Computer programming
            <ul>
                  <li>
                    Procedural programming in a high level programming language. Structured data types. <br/>
                    Sorting. Searching.Recursion. Program testing. Program documentation. Introduction to object-oriented programming.
                  </li>
                </ul> 
          </li>
          <li>Foundation of computer science
            <ul>
                  <li>
                  Computational Logic: Sets, Relations and <br/>
                  Functions, Propositional and Predicate Logic. Circuit Theory. FiniteState Machines and Regular Expressions
                  </li>
                </ul> 
          </li>
          <li>Development and Applications Fundamentals
            <ul>
                  <li>
                    Approaches to systems development (Structured and Object-Oriented); Systems Analysis <br/>
                    (Requirements discovery,Modelling systems requirements,Feasibility analysis); <br/>
                     Systems Design (Application architecture, output, input and user interfacedesign). <br/>
                  </li>
                </ul> 
          </li>
          <li> Calculus and LinearAlgebra
            <ul>
                  <li>
                  Integral Calculus- the definite integral, techniques of integration, applications of <br/>
                   integrals, Taylor series, polarcoordinates, complex numbers. Introduction to Linear <br/>
                   Algebra- vectors, lines and planes in space, matrices, systemsof linear equations, determinants.
                  </li>
                </ul> 
          </li>
      </ul>
      <h1>Second year - 2025</h1>   
     <ul>
                  
          <li>Object orientated programming
            <ul>
              <li>
              Object-oriented programming with Java: classes, inheritance and polymorphism. Object-oriented <br/>
              designmethodology and notation. Introduction to abstract data types. Container classes and <br/>
              iterators. Advanced programmingconstructs. Object-oriented GUI.
              </li>
            </ul> 
          </li>
          <li>Advanced calculus and Linear algebra
            <ul>
              <li>
              Advanced Calculus: Functions of several variables. Partial derivatives, differentiability, chain rules, <br/>
               implicitdifferentiation. Extrema and Lagrange multipliers. Multiple integrals, change of variables. <br/>
               Linear algebra: axioms forvector spaces. Linear independence, bases and dimension. Matrices and <br/>
               linear transformations. Change of basis.Eigenvectors and eigenvalues, diagonalization and its <br/>
               applications (including linear differential equations).Orthogonality, Gram-Schmidt process.
              </li>
            </ul> 
          </li>
          <li>System Analysis and design
            <ul>
              <li>
              Approaches to systems development (Structured and Object-Oriented); Systems Analysis <br/>
              (Requirements discovery,Modelling systems requirements, Feasibility analysis); Systems Design <br/> 
              (Application architecture, output, input and user interfacedesign).
              </li>
            </ul> 
          </li>
          <li>Discrete mathematics with applications
            <ul>
              <li>
              Basic set theory. Relations & functions, equivalence relations. Counting principles, inclusion-exclusion <br/>
              &pigeonhole principles, combinations, identities with binomial coefficients. Modular arithmetic, <br/>
              basic number theory: GCD,extended Euclidean algorithm, Euler’s totient function, basic group <br/>
              theory, Fermat’s Little Theorem, Euler’s Theorem.Cryptology: encryption, decryption of<br/>
               well-known private-key cryptosystems, cryptanalysis of shift, substitution &Vigenère <br/>
               ciphers, stream ciphers, Shannon theory, public key cryptography, product cryptosystems.<br/>
                Recursions &generating functions.
              </li>
            </ul> 
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;

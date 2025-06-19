import { MapPin, Calendar, GraduationCap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Textfit } from 'react-textfit';

const links = [
  { to: '/', label: 'Main' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contacts' },
];

const skills = [
  {
    category: 'Cloud Technologies',
    items: ['AWS', 'Docker', 'Textract', 'Cloudformation', 'CDK'],
  },
  {
    category: 'Development',
    items: ['TypeScript', 'React', 'Python', 'LangChain', 'FastAPI'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'DynamoDB', 'GraphQL'],
  },
];

const education = [
  {
    period: '2023 - Present',
    institution: 'AP Hogeschool Antwerp',
    degree: 'Graduate in Programming',
    status: 'In Progress',
  },
  {
    period: '2020 - 2023',
    institution: 'AP Hogeschool Antwerp',
    degree: 'Bachelor in Applied Computer Science',
    status: 'Not Finished',
  },
  {
    period: '2012 - 2020',
    institution: 'PITO Stabroek',
    degree: 'Secondary Education in electromechanics',
    status: 'Finished',
  },
];

export default function AboutPage() {
  return (
    <div className='overflow-hidden relative'>
      <div className='absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 h-80 w-80 flex items-center justify-center rounded-full border-2 opacity-75 border-gray-dark pointer-events-none z-[100]' />
      <Header />

      {/* Hero Section */}
      <div className='px-16 gap-y-32 mt-12 flex-col flex items-center justify-center relative h-screen'>
        <div className='gap-y-16 flex-col flex z-10'>
          <div className='flex'>
            <Textfit
              mode='single'
              max={4000}
              className='w-2/3 text-light font-mono font-semibold leading-[0.7]'
            >
              About
            </Textfit>
          </div>
          <div className='flex'>
            <p className='w-1/3 text-gray-light text-2xl font-sans font-normal'>
              Passionate about{' '}
              <span className='text-light'>cloud technologies</span> and{' '}
              <span className='text-light'>full-stack development</span>,
              currently gaining hands-on experience at Cloudar.
            </p>
            <Textfit
              mode='single'
              max={4000}
              className='w-2/3 pl-40 text-light font-mono font-semibold leading-[0.7]'
            >
              Yorgi
            </Textfit>
          </div>
        </div>
        <div className='absolute top-1/12 left-2/12 bg-radial rounded-full from-blue-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75' />
        <div className='absolute bottom-1/12 right-2/12 bg-radial rounded-full from-green-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75' />
      </div>

      {/* Personal Info Section */}
      <div className='mx-48 mb-32'>
        <div className='grid grid-cols-2 mb-16'>
          <p className='text-light font-sans font-semibold text-xl'>
            ... /Personal Info ...
          </p>
          <div className='w-2/3 -ml-20'>
            <div className='flex items-center gap-3 mb-4'>
              <MapPin className='text-light' size={20} />
              <p className='text-gray-light text-xl font-sans'>
                Antwerp, Belgium
              </p>
            </div>
            <div className='flex items-center gap-3 mb-4'>
              <Calendar className='text-light' size={20} />
              <p className='text-gray-light text-xl font-sans'>21 years old</p>
            </div>
            <div className='flex items-center gap-3'>
              <GraduationCap className='text-light' size={20} />
              <p className='text-gray-light text-xl font-sans'>
                AP Hogeschool Antwerp
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cloudar Internship Section */}
      <div className='mx-48 mb-32'>
        <h1 className='text-[10rem] font-medium font-mono text-light text-center p-0 m-0 mb-16'>
          Cloudar
        </h1>
        <hr className='border border-gray-dark/60 -mx-48 mb-16' />

        <div className='grid grid-cols-2 gap-16'>
          <div className='bg-dark p-8 rounded-[2.5rem] border border-gray-dark'>
            <h2 className='text-light text-3xl mb-6 font-medium'>
              Current Role
            </h2>
            <p className='text-gray-light text-xl font-sans mb-4'>
              <span className='text-light'>Development Intern</span> at Cloudar
            </p>
            <p className='text-gray-light text-lg font-sans leading-relaxed'>
              Working on internal AI applications and gaining experience with
              <span className='text-light'> AWS services</span>,
              <span className='text-light'> AI</span>, and
              <span className='text-light'> Cloud Infrastructure</span>.
            </p>
          </div>

          <div className='bg-light p-8 rounded-[2.5rem] border border-light'>
            <h2 className='text-dark text-3xl mb-6 font-medium'>
              What I'm Learning
            </h2>
            <ul className='text-dark text-lg font-sans space-y-2'>
              <li>• Cloud architecture and AWS services</li>
              <li>• Infrastructure as Code with Terraform</li>
              <li>• CI/CD pipeline development</li>
              <li>• Microservices architecture</li>
              <li>• Container orchestration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='mx-48 mb-32'>
        <div className='grid grid-cols-2 mb-16'>
          <p className='text-light font-sans font-semibold text-xl'>
            ... /Technical Skills ...
          </p>
        </div>

        <div className='grid grid-cols-2 gap-8'>
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className='bg-dark p-8 rounded-[2.5rem] border border-gray-dark'
            >
              <h3 className='text-light text-2xl mb-4 font-medium'>
                {skillGroup.category}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='bg-gray-dark text-light px-4 py-2 rounded-full text-sm font-mono'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className='z-10 mb-32'>
        <h1 className='text-[10rem] font-medium font-mono text-light text-right mr-48 p-0 m-0 mb-16'>
          Education
        </h1>
        <div className='flex flex-col justify-center items-center border-b border-gray-dark'>
          {education.map((edu, index) => (
            <div
              key={index}
              className='grid grid-cols-6 gap-4 border-t border-gray-dark w-full px-48 py-6 z-10 hover:bg-light group'
            >
              <div className='pr-4 border-gray-dark col-span-1'>
                <p className='text-xl text-light group-hover:text-dark'>
                  {edu.period}
                </p>
                <p className='text-sm text-gray-light group-hover:text-dark'>
                  {edu.status}
                </p>
              </div>
              <p className='text-2xl text-light leading-[200%] col-span-2 group-hover:text-dark'>
                {edu.institution}
              </p>
              <p className='text-2xl text-light leading-[200%] col-span-3 group-hover:text-dark'>
                {edu.degree}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Philosophy Section */}
      <div className='mx-48 mb-48'>
        <div className='bg-light p-16 rounded-[2.5rem] border border-light text-center'>
          <h2 className='text-dark text-4xl mb-8 font-medium font-mono'>
            My Philosophy
          </h2>
          <p className='text-dark text-2xl font-sans leading-relaxed max-w-4xl mx-auto'>
            I believe in writing{' '}
            <span className='font-semibold'>clean, maintainable code</span> and
            continuously learning new technologies. My experience at Cloudar has
            taught me the importance of
            <span className='font-semibold'> collaboration</span>,
            <span className='font-semibold'> problem-solving</span>, and
            <span className='font-semibold'>
              {' '}
              adapting to new challenges
            </span>{' '}
            in the ever-evolving tech landscape.
          </p>
        </div>
      </div>

      <Footer links={links} />
    </div>
  );
}

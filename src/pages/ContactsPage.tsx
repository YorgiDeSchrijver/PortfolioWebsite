import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Textfit } from 'react-textfit';

const links = [
  { to: '/', label: 'Main' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contacts' },
];

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'yorgi.deschrijver@example.com',
    href: 'mailto:yorgi.deschrijver@example.com',
    description: 'Drop me a line anytime',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+32 XXX XX XX XX',
    href: 'tel:+32XXXXXXXXX',
    description: 'Available during business hours',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'Antwerp, Belgium',
    href: 'https://maps.google.com/?q=Antwerp,Belgium',
    description: 'Open to remote work',
  },
];

export default function ContactsPage() {
  return (
    <div className='overflow-hidden relative'>
      <div className='absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 h-80 w-80 flex items-center justify-center rounded-full border-2 opacity-75 border-gray-dark pointer-events-none z-[100]' />
      <Header />

      {/* Hero Section */}
      <div className='px-16 gap-y-32 mt-32 flex-col flex items-center justify-center relative min-h-screen'>
        <div className='gap-y-16 flex-col flex z-10'>
          <div className='flex'>
            <Textfit
              mode='single'
              max={6000}
              className='w-full text-light font-mono font-semibold leading-[0.7] text-center'
            >
              Let's Connect
            </Textfit>
          </div>
          <div className='flex justify-center'>
            <p className='w-1/2 text-gray-light text-2xl font-sans font-normal text-center'>
              I'm always interested in new opportunities and collaborations.
              <span className='text-light'>
                {' '}
                Let's build something amazing together!
              </span>
            </p>
          </div>
        </div>

        <div className='absolute top-1/12 right-2/12 bg-radial rounded-full from-purple-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75' />
        <div className='absolute bottom-1/12 left-2/12 bg-radial rounded-full from-blue-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75' />
      </div>

      {/* Contact Methods Section */}
      <div className='mx-48 mb-32'>
        <div className='grid grid-cols-2 mb-16'>
          <p className='text-light font-sans font-semibold text-xl'>
            ... /Get In Touch ...
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8'>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className='bg-dark p-8 rounded-[2.5rem] border border-gray-dark hover:bg-light group transition-colors duration-300 flex items-center justify-between'
            >
              <div className='flex items-center gap-6'>
                <div className='text-light group-hover:text-dark'>
                  {method.icon}
                </div>
                <div>
                  <h3 className='text-light text-2xl mb-2 font-medium group-hover:text-dark'>
                    {method.label}
                  </h3>
                  <p className='text-gray-light text-lg font-mono group-hover:text-dark'>
                    {method.value}
                  </p>
                  <p className='text-gray-light text-sm group-hover:text-gray-600'>
                    {method.description}
                  </p>
                </div>
              </div>
              <div className='text-light group-hover:text-dark'>
                <ArrowUpRight size={24} strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='mx-48 mb-32'>
        <h1 className='text-[10rem] font-medium font-mono text-light text-center p-0 m-0 mb-16'>
          Message
        </h1>
        <hr className='border border-gray-dark/60 -mx-48 mb-16' />

        <div className='bg-dark p-12 rounded-[2.5rem] border border-gray-dark'>
          <form className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-light text-lg font-medium mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  className='w-full p-4 rounded-2xl border border-gray-dark bg-gray-800 text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-600'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label className='block text-light text-lg font-medium mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  className='w-full p-4 rounded-2xl border border-gray-dark bg-gray-800 text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-600'
                  placeholder='your.email@example.com'
                />
              </div>
            </div>

            <div>
              <label className='block text-light text-lg font-medium mb-2'>
                Subject
              </label>
              <input
                type='text'
                className='w-full p-4 rounded-2xl border border-gray-dark bg-gray-800 text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-600'
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className='block text-light text-lg font-medium mb-2'>
                Message
              </label>
              <textarea
                rows={6}
                className='w-full p-4 rounded-2xl border border-gray-dark bg-gray-800 text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none'
                placeholder='Tell me about your project...'
              />
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-light text-dark px-12 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center gap-3 cursor-pointer'
              >
                Send Message
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Availability Section */}
      <div className='mx-48 mb-48'>
        <div className='bg-dark p-16 rounded-[2.5rem] border border-gray-dark text-center'>
          <h2 className='text-light text-4xl mb-8 font-medium font-mono'>
            Currently Available
          </h2>
          <p className='text-gray-light text-2xl font-sans leading-relaxed max-w-4xl mx-auto mb-8'>
            I'm currently looking for{' '}
            <span className='text-light'>internship opportunities</span> and
            <span className='text-light'> freelance projects</span>. If you have
            an exciting project or opportunity, I'd love to hear from you!
          </p>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
            <span className='text-green-400 font-medium'>
              Available for new projects
            </span>
          </div>
        </div>
      </div>

      <Footer links={links} />
    </div>
  );
}

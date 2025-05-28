import { Card } from "./card"
import IconSupervisor from '../assets/images/icon-supervisor.svg'
import IconBuilder from '../assets/images/icon-team-builder.svg'
import IconKarma from '../assets/images/icon-karma.svg'
import IconCalculator from '../assets/images/icon-calculator.svg'
export const CardsContainer = () => {

    const services = [
        {
            id:1,
            title: 'Supervisor',
            description:'Monitors activity to identify project roadblocks',
            img:IconSupervisor,
            color:''
        },
        {
            id:2,
            title: 'Team Builder',
            description:'Scans our talent network to create the optimal team for your project',
            img:IconBuilder,
            color:''
        },
        {
            id:3,
            title: 'Karma',
            description:'Regularly evaluates our talent to ensure quality',
            img:IconKarma,
            color:''
        },
        {
            id:4,
            title: 'Calculator',
            description:'Uses data from past projects to provide better delivery estimates',
            img:IconCalculator,
            color:''
        }
    ]

  return (
    <section>
        {
            services.map((service) => {
                return (
                    <Card 
                    key={service.id}
                    {...service}
                    />
                )
            })
        }
    </section>
  )
}

  
  

  
  

  
  

  
  

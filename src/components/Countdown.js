import React, { Component } from "react";
import moment from 'moment'

class Countdown extends Component {
    state = {
        duration: this.getRemainingTime(),
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                duration: this.getRemainingTime()
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    

    getRemainingTime() {
        
        // Current Date
        let now = moment(),
        
        // New Year
        year = moment({year: now.year() + 1}),

        // Difference Between The 2
        diff = year.diff(now)

        // return duration of tge difference
        return moment.duration(diff)
    }
  render() {
      let {duration} = this.state
    return (
      <section className='hero is-dark is-fullheight has-text-centered'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>The New Year Is Coming!</h1>
            <div className='section'>
              <nav className='level'>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Days</p>
                    <p className='title'>{(Math.round(duration.asDays()).toString().padStart(3,"0"))}</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Hours</p>
                    <p className='title'>{duration.hours().toString().padStart(2, '0')}</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Minutes</p>
                    <p className='title'>{duration.minutes().toString().padStart(2, '0')}</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Seconds</p>
                
                    <p className='title'>{(duration.seconds()).toString().padStart(2, '0')}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;

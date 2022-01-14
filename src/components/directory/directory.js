import React from 'react';
import MenuItem from '../menuItem/menuItem';
import './directory.scss';
import SECTIONS_DATA from './sectionsData'

class Directory extends React.Component {
  constructor() {
    super();
      this.state = {
        sections: SECTIONS_DATA
      }
  }
  
  render() {
    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...sectionsProps }) => (
            <MenuItem key={id} {...sectionsProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
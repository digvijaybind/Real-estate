import React from 'react'

type Props = {}

const ListingTopSearch = (props: Props) => {
  return (
    <section className='top-search'>
        <div className='container'>
            <div className='row'>
                <form>
                    <div className='col-in'>
                        <label htmlFor="">Property type</label>
                        <select><option>Choose one</option></select>
                    </div>
                    <div className='col-in'>
                        <label htmlFor="">Price range</label>
                        <select><option>Choose one</option></select>
                    </div>
                    <div className='col-in'>
                        <label htmlFor="">Investment ranges</label>
                        <select><option>Choose one</option></select>
                    </div>
                    <div className='col-in'>
                        <label htmlFor="">Current Investment states</label>
                        <select><option>More than 50% available</option></select>
                    </div>
                    <div className='col-in'>
                        <label htmlFor="">Location of property</label>
                        <select><option>Search here...</option></select>
                    </div>
                    <div className='col-in'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.12759 4.89102H1V1.76343" stroke="#E8505B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.21154 10.7884C4.01344 11.5903 5.03513 12.1364 6.1474 12.3576C7.25967 12.5789 8.41256 12.4653 9.4603 12.0314C10.508 11.5974 11.4035 10.8624 12.0336 9.9195C12.6636 8.97657 12.9999 7.86797 12.9999 6.73391C12.9999 5.59985 12.6636 4.49126 12.0336 3.54832C11.4035 2.60539 10.508 1.87046 9.4603 1.43647C8.41256 1.00248 7.25967 0.888934 6.1474 1.11018C5.03513 1.33142 4.01344 1.87752 3.21154 2.67943L1 4.89096" stroke="#E8505B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 <input type={'submit'} value="Reset all" />
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ListingTopSearch
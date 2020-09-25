import React from 'react';
import Link from 'next/link';
import Query from '../components/query';
import CATEGORIES_QUERY from '../apollo/queries/categories';

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className='uk-navbar-container'>
                <div className='uk-navbar-left'>
                  <li>
                    <Link href='/'>
                      <a>Strapi Blog</a>
                    </Link>
                  </li>
                </div>
              </nav>
              <div className='uk-navbar-right'>
                <ul className='uk-navbar-nav'>
                  {categories.map((category) => {
                    return (
                      <li key={category.id}>
                        <Link
                          href={{
                            pathname: 'category',
                            query: { id: category.id }
                          }}
                        >
                          <a className='uk-link-reset'>{category.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;

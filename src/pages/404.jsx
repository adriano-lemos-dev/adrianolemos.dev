import React from 'react';
import Header from 'components/Header';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

export default () => (
  <Layout>
    <SEO title="404: Not Found" />
    <Header title="Página não encontrada" subtitle="Que azar! Melhor sorte da próxima vez!" />
  </Layout>
);

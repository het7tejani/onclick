import React from 'react';
import './DatabasePage.css';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
import mainImg from '../../assets/technology/database/main.jpg';
import badgeInflux from '../../assets/technology/database/InfluxDB logo.png';
import badgeMaria from '../../assets/technology/database/mariaDB logo.png';
import badgeCouch from '../../assets/technology/database/couchDB.png';
import badgeFirebase from '../../assets/technology/database/firebase.png';

import cardIntegrity from '../../assets/technology/database/Transactional Integrity.png';
// import cardQuery from '../../assets/technology/database/Query Optimization.png';
import cardAccess from '../../assets/technology/database/Access Control & Security.png';
import cardBackup from '../../assets/technology/database/Backup & Recovery.png';

import detailMysql from '../../assets/technology/database/MySQL.png';
import detailDynamo from '../../assets/technology/database/DynamoDB.png';
import detailPostgres from '../../assets/technology/database/PostgreSQL.png';
import detailOracle from '../../assets/technology/database/Oracle.png';
import detailMongo from '../../assets/technology/database/MongoDB.png';
import detailRedis from '../../assets/technology/database/Redis.png';

const heroBadges = [
    { src: badgeInflux, alt: 'InfluxDB' },
    { src: badgeMaria, alt: 'MariaDB' },
    { src: badgeCouch, alt: 'CouchDB' },
    { src: badgeFirebase, alt: 'Firebase' },
];

const showcaseFeatures = [
    { key: 'SQLite', title: 'SQLite', desc: 'For mobile and embedded applications, we utilize SQLite, a lightweight, serverless, and self-contained SQL database engine. It\'s incredibly reliable and requires zero configuration, making it the perfect choice for local data storage on user devices.' },
    { key: 'MariaDB', title: 'MariaDB', desc: 'As a community-developed fork of MySQL, MariaDB is our go-to for high-performance, open-source relational databases. We leverage its enhanced features and storage engines to build fast, scalable, and robust applications with a focus on reliability.' },
    { key: 'Cassandra', title: 'Apache Cassandra', desc: 'When dealing with massive amounts of data across multiple servers, we rely on Apache Cassandra. This distributed NoSQL database offers linear scalability and high availability without a single point of failure, perfect for big data applications.' },
    { key: 'Neo4j', title: 'Neo4j', desc: 'For applications that depend on highly connected data, we use Neo4j, a native graph database. It allows us to efficiently store, query, and traverse complex relationships, making it ideal for recommendation engines, fraud detection, and social networks.' },
    { key: 'FirebaseDB', title: 'Firebase Realtime Database', desc: 'To build collaborative, real-time applications, we use Firebase Realtime Database. This cloud-hosted NoSQL database allows data to be synchronized across all clients in real-time and remains available even when an app goes offline.' },
    { key: 'CouchDB', title: 'Apache CouchDB', desc: 'We use Apache CouchDB for its seamless data synchronization and support for offline-first applications. It stores data as JSON documents and uses JavaScript for queries, making it a flexible and developer-friendly choice for distributed applications.' },
    { key: 'InfluxDB', title: 'InfluxDB', desc: 'For applications that handle time-stamped data, such as IoT monitoring and real-time analytics, we use InfluxDB. It\'s a purpose-built time series database optimized for high-speed data ingestion and complex queries over time.' },
];

const servicesCards = [
    { title: 'Transactional Integrity', desc: 'We implement ACID-compliant systems that guarantee data accuracy and reliability across transactions, even in cases of power failure or errors.', img: cardIntegrity },
    // { title: 'Query Optimization', desc: 'Our DBMS solutions include finely-tuned indexing, efficient query plans, and performance profiling to ensure fast, reliable access to your data.', img: cardQuery },
    { title: 'Access Control & Security', desc: 'We configure granular permission systems, role-based access, and encryption policies to secure data from unauthorized access and breaches.', img: cardAccess },
    { title: 'Backup & Recovery', desc: 'We implement automated backup strategies and recovery plans to prevent data loss, ensuring business continuity even in critical failures.', img: cardBackup }
];

const detailSections = [
    { id: 'mysql', title: 'MySQL Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech delivers reliable, high-performance web and enterprise applications backed by MySQL. As a widely-used open-source relational database, MySQL is perfect for scalable, structured data systems.', description: 'We use MySQL to power dynamic, data-driven applications that require security, consistency, and speed.', img: detailMysql, techs: ['MySQL 8+, InnoDB, MyISAM', 'PHPMyAdmin, MySQL Workbench', 'Stored Procedures, Triggers, Views', 'Replication, Partitioning, Clustering', 'ORM Integration: Eloquent, Hibernate', 'Data Backup, Recovery, Tuning'], details: '<strong>Reliable & Scalable:</strong> Trusted for everything from small apps to enterprise platforms.<br><strong>Open Source Flexibility:</strong> Easily customizable and widely supported.<br><strong>ACID Compliant:</strong> Ensures secure transactions and consistent data.<br>📩 Let’s build powerful apps with MySQL’s proven database engine.' },
    { id: 'dynamo-db', title: 'DynamoDB Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech leverages Amazon DynamoDB for serverless, high-availability NoSQL database solutions. Designed for scale and speed, DynamoDB is ideal for cloud-native, real-time apps.', description: 'We use DynamoDB to build globally distributed, low-latency backends with seamless AWS integration.', img: detailDynamo, techs: ['Amazon DynamoDB, AWS Lambda', 'Document & Key-Value Storage', 'DAX, Global Tables, Streams', 'CloudWatch, IAM, VPC Integration', 'Serverless Frameworks, Boto3', 'Backup, Restore, Auto Scaling'], details: '<strong>Serverless and Scalable:</strong> Built-in auto-scaling and zero maintenance.<br><strong>Real-Time Ready:</strong> Millisecond response times for mission-critical apps.<br><strong>Fully Integrated with AWS:</strong> Secure, reliable, and easy to manage.<br>📩 Ready to go serverless? Let’s build your backend on DynamoDB.' },
    { id: 'postgresql', title: 'PostgreSQL Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we utilize PostgreSQL to deliver reliable, high-performance database solutions for complex and data-intensive applications. PostgreSQL combines enterprise-grade power with open-source flexibility.', description: 'Perfect for modern apps, PostgreSQL supports advanced data types, full-text search, and complex queries.', img: detailPostgres, techs: ['PostgreSQL 14+, pgAdmin', 'Stored Procedures, Views, Indexing', 'JSONB, Array Data Types, GIS', 'Logical Replication, Partitioning', 'ORMs: Sequelize, SQLAlchemy, Hibernate', 'PL/pgSQL, Triggers, Extensions'], details: '<strong>Advanced Querying:</strong> Ideal for analytics, search, and real-time dashboards.<br><strong>Enterprise-Grade:</strong> ACID compliance, role-based access, and high reliability.<br><strong>Extensible:</strong> Support for custom functions, data types, and plugins.<br>📩 Let’s scale your data infrastructure with the power of PostgreSQL.' },
    { id: 'oracle', title: 'Oracle Database Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech helps enterprises unlock the full potential of Oracle Database for secure, high-performance, and mission-critical applications. Oracle is built for speed, scalability, and advanced data management.', description: 'We offer expert Oracle database consulting, development, and optimization services tailored to your needs.', img: detailOracle, techs: ['Oracle DB 19c, Oracle SQL Developer', 'PL/SQL, Triggers, Packages', 'Partitioning, Materialized Views', 'Oracle RAC, Data Guard, ASM', 'Oracle APEX, GoldenGate', 'Performance Tuning, Data Migration'], details: '<strong>Enterprise-Grade Reliability:</strong> High availability and disaster recovery built-in.<br><strong>Secure & Scalable:</strong> Perfect for financial, healthcare, and government systems.<br><strong>Advanced Tooling:</strong> Powerful features for data warehousing and analytics.<br>📩 Need a robust data solution? Let our Oracle experts help.' },
    { id: 'mongo-db', title: 'MongoDB Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech utilizes MongoDB to develop flexible, high-performance NoSQL applications. With schema-less design and high scalability, MongoDB is ideal for modern, agile development environments.', description: 'We use MongoDB to power applications that need to handle large volumes of semi-structured or unstructured data.', img: detailMongo, techs: ['MongoDB Atlas, Compass', 'Mongoose (Node.js), PyMongo', 'Aggregation Framework', 'Sharding, Replication', 'Change Streams, GridFS', 'MongoDB Realm, Stitch (Mobile)'], details: '<strong>Schema-Free Flexibility:</strong> Adapt quickly to changing business needs.<br><strong>Horizontally Scalable:</strong> Perfect for large, distributed data workloads.<br><strong>Developer Friendly:</strong> Integrates well with modern stacks.<br>📩 Build your next-gen application with MongoDB and our expert developers.' },
    { id: 'redis', title: 'Redis Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech uses Redis to boost application performance with blazing-fast in-memory caching, real-time messaging, and session management. Redis is a powerful data store built for speed and simplicity.', description: 'From caching layers to pub/sub messaging systems, Redis helps us build responsive, scalable applications.', img: detailRedis, techs: ['Redis, Redis Cluster', 'Redis Streams, Pub/Sub', 'Lua Scripting, Sorted Sets', 'Persistence: RDB, AOF', 'Integration with Node, Python, PHP', 'Monitoring: RedisInsight, Prometheus'], details: '<strong>Ultra-Fast Caching:</strong> Improve app speed and reduce load times.<br><strong>Real-Time Capabilities:</strong> Power chat apps, notifications, queues, and analytics.<br><strong>Lightweight & Reliable:</strong> Built for high throughput and low latency.<br>📩 Accelerate your apps with Redis-powered performance.' }
];

const DatabasePage = () => {
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.onclickinfotech.com/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Technologies",
            "item": "https://www.onclickinfotech.com/technologies"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": "Database",
            "item": "https://www.onclickinfotech.com/technologies/database"
        }]
    };

    return (
        <div className="database-page">
            <SEO 
              title="Database Technologies | MySQL, PostgreSQL, MongoDB & NoSQL"
              description="Explore our database expertise. We design and manage scalable, secure database solutions using SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, DynamoDB, Redis) technologies."
              url="/technologies/database"
              image={mainImg}
            />
            <StructuredData data={breadcrumbData} />

            <ServiceHero
                preTitle="Database"
                title="Services for Scalable Business Growth"
                description="We deliver full-spectrum Database services, including design, implementation, optimization, and management. Our expertise covers SQL databases like MySQL, PostgreSQL, and MS SQL, as well as NoSQL solutions like MongoDB and Cassandra. We ensure high availability, data integrity, scalability, and robust security standards."
                solutionsHeading="We Provide Smart Solutions With"
                badges={heroBadges}
                mainImage={mainImg}
            />

            <FeatureShowcase
                title="Specialized Database Technologies"
                features={showcaseFeatures}
            />
            
            <CardGrid
                title="Our Expertise in Database Management Systems"
                description="We build and manage robust DBMS solutions to ensure data consistency, availability, and performance—empowering your applications to run smarter and faster."
                cards={servicesCards}
            />

            <div className="technology-list-container">
                {detailSections.map((section, index) => (
                    <ServiceDetail
                        key={section.id}
                        section={section}
                        imagePosition={index % 2 !== 0 ? 'left' : 'right'} 
                    />
                ))}
            </div>
        </div>
    );
};

export default DatabasePage;
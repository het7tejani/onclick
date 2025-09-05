import React from 'react';
import './DatabasePage.css';

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

import featureSqlite from '../../assets/technology/database/SQLite.png';
import featureMaria from '../../assets/technology/database/MariaDB.png';
import featureCassandra from '../../assets/technology/database/Apache Cassandra.png';
import featureNeo4j from '../../assets/technology/database/Neo4j.png';
import featureFirebase from '../../assets/technology/database/Firebase Realtime Database.png';
import featureCouch from '../../assets/technology/database/Apache CouchDB.png';
import featureInflux from '../../assets/technology/database/InfluxDB.png';

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

const showcaseSidebarItems = [
    { key: 'SQLite', title: 'SQLite', desc: 'Lightweight, file-based relational DBMS for mobile systems' },
    { key: 'MariaDB', title: 'MariaDB', desc: 'Community-developed fork of MySQL, focused on performance' },
    { key: 'Cassandra', title: 'Apache Cassandra', desc: 'Distributed NoSQL DB for handling large amounts of data' },
    { key: 'Neo4j', title: 'Neo4j', desc: 'Graph database built for querying and storing connected data' },
    { key: 'FirebaseDB', title: 'Firebase Realtime Database', desc: 'Cloud-hosted NoSQL database for real-time syncing' },
    { key: 'CouchDB', title: 'Apache CouchDB', desc: 'NoSQL database that uses JSON for documents and JS for queries' },
    { key: 'InfluxDB', title: 'InfluxDB', desc: 'Time series database optimized for high write and query performance' },
];

const showcaseImageMap = {
    SQLite: featureSqlite, MariaDB: featureMaria, Cassandra: featureCassandra, Neo4j: featureNeo4j,
    FirebaseDB: featureFirebase, CouchDB: featureCouch, InfluxDB: featureInflux
};

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
    return (
        <div className="database-page">
            <ServiceHero
                preTitle="Database"
                title="Services for Scalable Business Growth"
                description="We deliver full-spectrum Database services, including design, implementation, optimization, and management. Our expertise covers SQL databases like MySQL, PostgreSQL, and MS SQL, as well as NoSQL solutions like MongoDB and Cassandra. We ensure high availability, data integrity, scalability, and robust security standards."
                solutionsHeading="We Provide Smart Solutions With"
                badges={heroBadges}
                mainImage={mainImg}
            />

            <FeatureShowcase
                sidebarItems={showcaseSidebarItems}
                imageMap={showcaseImageMap}
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
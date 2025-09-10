DROP TABLE IF EXISTS tipsdistributiondata CASCADE;


CREATE TABLE tipsdistributiondata (
  fulltips DECIMAL,
  assistanttips DECIMAL,
  kidspizzaprice DECIMAL,
  adultspizzaprice DECIMAL,
  adultscocktailprice DECIMAL,
  fieldtripprice DECIMAL,
  pizzatipspercent DECIMAL,
  kitchentipspercent DECIMAL,
  frontTipsPercent DECIMAL,
  sundayspizzatip DECIMAL
  );

-- =======================
-- Grants to udokm633_tipsdistributiondata
-- =======================

-- Allow connecting to the database
GRANT CONNECT ON DATABASE udokm633_tipsdistributiondata TO udokm633_tipsdistributiondata;

-- Allow usage of the public schema
GRANT USAGE ON SCHEMA public TO udokm633_tipsdistributiondata;

-- Grant all privileges on all existing tables with grant option
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO udokm633_tipsdistributiondata WITH GRANT OPTION;

-- Ensure all new tables in the schema grant all privileges by default with grant option
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT ALL PRIVILEGES ON TABLES TO udokm633_tipsdistributiondata WITH GRANT OPTION;

-- Grant all privileges on all existing sequences
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO udokm633_tipsdistributiondata;

-- Ensure all new sequences grant all privileges by default
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT ALL PRIVILEGES ON SEQUENCES TO udokm633_tipsdistributiondata;


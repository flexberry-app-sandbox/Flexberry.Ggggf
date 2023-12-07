docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ggggf-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t ggggf-java/app ../../..

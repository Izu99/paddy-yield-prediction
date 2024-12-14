from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.orm.session import Session

# Directly use the database URL
DATABASE_URL = "mysql+mysqlconnector://root:root@localhost:3306/paddy_cultivation_db"

# Database engine
engine = create_engine(DATABASE_URL, echo=True)  # echo=True for logging SQL statements

# Create a session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for ORM models
Base = declarative_base()

# Dependency to be injected into route functions
def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

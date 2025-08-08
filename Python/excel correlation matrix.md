```python
import pandas as pd

# Load the Excel file into a pandas DataFrame
excel_file_path = '/content/2025 97 28 Lab Result (plankton).xlsx'
df = pd.read_excel(excel_file_path)

# Display the column names
print("Column Names:")
print(df.columns)

# Display the first few rows to show content
print("\nFirst 5 rows:")
display(df.head())

# Select only numeric columns for correlation calculation
numeric_df_csv = df_csv.select_dtypes(include='number')

# Calculate the correlation matrix
correlation_matrix_csv = numeric_df_csv.corr()

# Display the correlation matrix
display(correlation_matrix_csv)

# Export the correlation matrix to a CSV file
correlation_matrix_csv.to_csv('correlation_matrix_csv.csv')

print("correlation_matrix_csv.csv has been saved.")
```

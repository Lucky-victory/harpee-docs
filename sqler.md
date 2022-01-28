{ https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark-reasonable.min.css | absolute_url} 

   <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.3.1/build/highlight.min.js">
  </script> 




# Sqler 
This class aims to simplify writing sql queries
by chaining multiple function.

## select([columns],distinct)
<pre>
<code>

select(['age','name','email'])
// result: SELECT age,name,email

// or with distinct

select(['age','name','email'],true)
// result : SELECT DISTINCT age,name,email



</code>
</pre>

## selectAvg(column)
<pre>
<code>

selectAvg('age')
// result: SELECT AVG(age)



</code>
</pre>

## selectSum(column)
<pre>
<code>

selectSum('age')
// result: SELECT SUM(age)


</code>
</pre>

## selectCount(column)
<pre>
<code>

selectCount('age')
// result: SELECT COUNT(age)



</code>
</pre>

## from(schema,table)
<pre>
<code>

select('age','name').from(usersSchema,users)
// result: SELECT age,name FROM usersSchema.users



</code>
</pre>

## where(condition)
<pre>
<code>

select('age','name').from(usersSchema,users).where('age').isNotNull()
// result: SELECT age,name FROM usersSchema.users WHERE age IS NOT NULL;



</code>
</pre>

## whereNot(condition)
<pre>
<code>

select('age','name').from(usersSchema,users).whereNot('age').equalTo(30)
// result: SELECT age,name FROM usersSchema.users WHERE NOT age=30;



</code>
</pre>

## orderBy(column)
<pre>
<code>

select('age','name').from(usersSchema,users).orderBy('age')
// result: SELECT age,name FROM usersSchema.users ORDER BY age;



</code>
</pre>
## order('DESC' | 'ASC')
<pre>
<code>

select('age','name').from(usersSchema,users).orderBy('age').order('DESC')
// result: SELECT age,name FROM usersSchema.users ORDER BY age DESC;



</code>
</pre>

## limit(limit)
<pre>
<code>

select('age','name').from(usersSchema,users).limit(5)
// result: SELECT age,name FROM usersSchema.users LIMIT 5;



</code>
</pre>

## offset(offset)
<pre>
<code>

select('age','name').from(usersSchema,users).limit(5).offset(10)
// result: SELECT age,name FROM usersSchema.users LIMIT 5 OFFSET 10;



</code>
</pre>

   <script>
      hljs.highlightAll();
   </script>
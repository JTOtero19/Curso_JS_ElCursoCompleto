# Primero se crea una variable que contendra el codigo
def spin_words(input_word)
  # Luego en estas dos lineas se creara la palabra que contendra lo que el usuario escriba.
  # y un array vacio para guardar el resultado
  words = input_word.split
  result_word = []

  # Luego se hacer un each a cada palabra escrita por el usuario
  words.each do |word|
    # Que si la palabra tiene 5 o mas caracteres se va a aplicar el metdodo reverse y se guardara en result_word
    if word.length >= 5
      result_word << word.reverse
      # Si no cumple con la condicion, la palabra se guardara altiro en result_word
    else
      result_word << word
    end
  end
  # Finalmente unimos todas las palabras.
  result_word.join(' ')
end

input_word = 'Yo sinceramente prefiero los completos italianos con mostaza, fact'
output_string = spin_words(input_word)
puts output_string

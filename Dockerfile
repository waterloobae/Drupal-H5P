FROM drupal:latest
 
# Modify php.ini to change 
# RUN sed -i 's/post_max_size = .*/post_max_size = 512M/' /usr/local/etc/php/php.ini-production
# RUN sed -i 's/upload_max_filesize = .*/upload_max_filesize = 512M/' /usr/local/etc/php/php.ini-production
# RUN sed -i 's/post_max_size = .*/post_max_size = 512M/' /usr/local/etc/php/php.ini-development
# RUN sed -i 's/upload_max_filesize = .*/upload_max_filesize = 512M/' /usr/local/etc/php/php.ini-development

RUN { \
    echo 'upload_max_filesize=256M'; \
    echo 'post_max_size=256M'; \
  } > /usr/local/etc/php/conf.d/uploads.ini

# Expose port 80 for Apache
EXPOSE 80
# RUN service apache2 restart

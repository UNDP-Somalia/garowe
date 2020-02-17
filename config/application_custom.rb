module Consul
  class Application < Rails::Application
  	config.i18n.default_locale = :so
  	config.i18n.available_locales = [:so, :en]
  end
end
